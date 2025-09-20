import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule
  ]
})
export class BirthdayFormComponent implements OnInit {
  birthdayForm!: FormGroup;
  userId!: string;
  file!: File | null;
  imagePreview: string | null = null;
  submitted = false; // Track if the form was submitted

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
      pictureUrl: ['']
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
    const formInput = {
      userId: this.userId,
      name: this.birthdayForm.value.name,
      birthDay: this.birthdayForm.value.birthDay,
      birthMonth: this.birthdayForm.value.birthMonth,
      pictureUrl
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




// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { Firestore, collection, addDoc } from '@angular/fire/firestore';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-birthday-form',
//   templateUrl: './birthday-form.component.html',
//   styleUrls: ['./birthday-form.component.scss'],
//   standalone: true,
//   imports: [
//     ReactiveFormsModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     CommonModule
//   ]
// })
// export class BirthdayFormComponent implements OnInit {
//   birthdayForm!: FormGroup;
//   userId!: string;
//   file!: File | null;
//   imagePreview: string | null = null;

//   constructor(
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private firestore: Firestore
//   ) {
//     this.userId = this.route.snapshot.paramMap.get('userId') || '';
//   }

//   ngOnInit() {
//     this.birthdayForm = this.fb.group({
//       name: ['', Validators.required],
//       birthDay: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
//       birthMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
//       pictureUrl: ['']
//     });
//   }

//   onFileSelected(event: any) {
//     this.file = event.target.files[0];
//     if (this.file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.imagePreview = reader.result as string;
//       };
//       reader.readAsDataURL(this.file);
//     }
//   }

//   async submitForm() {
//     if (!this.birthdayForm.valid) return;

//     let pictureUrl = this.birthdayForm.value.pictureUrl || '';

//     if (this.file) {
//       const storage = getStorage();
//       const fileRef = ref(storage, `celebrants/${this.userId}/${Date.now()}_${this.file.name}`);
//       await uploadBytes(fileRef, this.file);
//       pictureUrl = await getDownloadURL(fileRef);
//     }

//     const coll = collection(this.firestore, 'celebrants');
//     const formInput = {
//       userId: this.userId,
//       name: this.birthdayForm.value.name,
//       birthDay: this.birthdayForm.value.birthDay,
//       birthMonth: this.birthdayForm.value.birthMonth,
//       pictureUrl
//     };
//     console.log('formInput',formInput);
//     await addDoc(coll, formInput);

//     alert('Thank you! Your birthday was submitted.');
//     this.birthdayForm.reset();
//     this.file = null;
//     this.imagePreview = null;
//   }
// }