import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { toSentenceCase, isValidGroupName, hasWhitespace, isNumericOnly } from '../utils/string-utils';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const DAYS_IN_MONTH: Record<number, number> = {
  1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
  7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
};

@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class BirthdayFormComponent implements OnInit {
  birthdayForm!: FormGroup;
  userId!: string;
  file!: File | null;
  imagePreview: string | null = null;
  submitted = false;

  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  get maxDaysInMonth(): number {
    const month = this.birthdayForm?.get('birthMonth')?.value;
    return month ? DAYS_IN_MONTH[month] : 31;
  }

  get showDayError(): boolean {
    const dayCtrl = this.birthdayForm?.get('birthDay');
    const monthCtrl = this.birthdayForm?.get('birthMonth');
    return !!(dayCtrl?.touched && monthCtrl?.touched && dayCtrl?.errors?.['dayOutOfRange']);
  }

  private static validDayMonth(control: AbstractControl): ValidationErrors | null {
    const day = control.get('birthDay')?.value;
    const month = control.get('birthMonth')?.value;
    if (!day || !month) return null;
    const max = DAYS_IN_MONTH[month];
    return day > max ? { dayOutOfRange: true } : null;
  }

  private static validGroup(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (!value || !value.trim()) return null;
    if (hasWhitespace(value)) return { groupHasWhitespace: true };
    if (isNumericOnly(value)) return { groupIsNumber: true };
    if (!isValidGroupName(value)) return { groupInvalid: true };
    return null;
  }

  get groupHasWhitespace(): boolean {
    const ctrl = this.birthdayForm?.get('group');
    return !!(ctrl?.touched && ctrl?.errors?.['groupHasWhitespace']);
  }

  get groupIsNumber(): boolean {
    const ctrl = this.birthdayForm?.get('group');
    return !!(ctrl?.touched && ctrl?.errors?.['groupIsNumber']);
  }

  onNameBlur() {
    const ctrl = this.birthdayForm?.get('name');
    if (ctrl?.value) {
      ctrl.setValue(toSentenceCase(ctrl.value));
    }
  }

  onGroupBlur() {
    const ctrl = this.birthdayForm?.get('group');
    if (ctrl?.value) {
      ctrl.setValue(toSentenceCase(ctrl.value));
    }
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private firestore: Firestore
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId') || '';
  }

  ngOnInit() {
    this.birthdayForm = this.fb.group({
      name: ['', Validators.required],
      birthDay: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      birthMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      pictureUrl: [''],
      group: ['', BirthdayFormComponent.validGroup]
    }, { validators: BirthdayFormComponent.validDayMonth });

    this.birthdayForm.get('birthMonth')!.valueChanges.subscribe(() => {
      const dayCtrl = this.birthdayForm.get('birthDay')!;
      const monthCtrl = this.birthdayForm.get('birthMonth')!;
      const month = monthCtrl.value;
      if (month && dayCtrl.value > DAYS_IN_MONTH[month]) {
        dayCtrl.setValue(DAYS_IN_MONTH[month]);
      }
      dayCtrl.updateValueAndValidity();
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.file);
    }
  }

  async submitForm() {
    if (!this.birthdayForm.valid) return;

    let pictureUrl = this.birthdayForm.value.pictureUrl || '';

    if (this.file) {
      const storage = getStorage();
      const fileRef = ref(storage, `celebrants/${this.userId}/${Date.now()}_${this.file.name}`);
      await uploadBytes(fileRef, this.file);
      pictureUrl = await getDownloadURL(fileRef);
    }

    const coll = collection(this.firestore, 'celebrants');
    const groupValue = this.birthdayForm.value.group;
    const formInput = {
      userId: this.userId,
      name: toSentenceCase(this.birthdayForm.value.name),
      birthDay: this.birthdayForm.value.birthDay,
      birthMonth: this.birthdayForm.value.birthMonth,
      pictureUrl,
      group: groupValue && groupValue.trim() ? toSentenceCase(groupValue) : ''
    };

    await addDoc(coll, formInput);

    // Reset form
    this.birthdayForm.reset();
    this.file = null;
    this.imagePreview = null;
    this.submitted = true; // show thank you message
  }

  // Generate the invite link
  get inviteLink() {
    return `${window.location.origin}/form/${this.userId}`;
  }
}