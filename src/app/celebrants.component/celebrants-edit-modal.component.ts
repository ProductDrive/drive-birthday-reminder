import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface EditCelebrantData {
  name: string;
  birthDay: number;
  birthMonth: number;
  notificationType: string;
  notifyTimes: string[];
}

@Component({
  selector: 'app-celebrants-edit-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './celebrants-edit-modal.component.html',
  styleUrls: ['./celebrants-edit-modal.component.scss']
})
export class CelebrantsEditModalComponent {
  @Input() data!: EditCelebrantData;
  @Input() open = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() save = new EventEmitter<EditCelebrantData>();

  notificationTypes = ['whatsapp', 'email'];
  notifyOptions = [
    { label: '1 Month before', value: '1month' },
    { label: '2 Weeks before', value: '2weeks' },
    { label: '3 Days before', value: '3days' }
  ];

  localData: EditCelebrantData = {
    name: '',
    birthDay: 1,
    birthMonth: 1,
    notificationType: 'whatsapp',
    notifyTimes: []
  };

  ngOnInit() {
    if (this.data) {
      this.localData = { ...this.data };
    }
  }

  toggleNotifyTime(value: string) {
    if (this.localData.notifyTimes.includes(value)) {
      this.localData.notifyTimes = this.localData.notifyTimes.filter(v => v !== value);
    } else {
      this.localData.notifyTimes.push(value);
    }
  }

  onSave() {
    this.save.emit(this.localData);
  }

  onClose() {
    this.closeModal.emit();
  }
}
