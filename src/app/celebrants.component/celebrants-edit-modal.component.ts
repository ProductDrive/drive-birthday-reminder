import { Component, EventEmitter, Input, Output, inject, OnChanges, SimpleChanges } from '@angular/core';
import { NotificationService, SubscriptionPayload } from '../services/notification.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';

export interface EditCelebrantData {
  id?: string;
  name: string;
  birthDay: number;
  birthMonth: number;
  notificationType: string[];
  notifyTimes: string[];
}

const NOTIFICATION_TYPE_MAP: Record<number, string> = {
  0: 'email',
  1: 'whatsapp'
};

const NOTIFY_TIME_MAP: Record<number, string> = {
  0: '1months',
  1: '2weeks',
  2: '3days'
};

@Component({
  selector: 'app-celebrants-edit-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './celebrants-edit-modal.component.html',
  styleUrls: ['./celebrants-edit-modal.component.scss']
})
export class CelebrantsEditModalComponent implements OnChanges {
  @Input() data!: EditCelebrantData;
  @Input() open = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() save = new EventEmitter<EditCelebrantData>();

  notificationService = inject(NotificationService);
  private auth = inject(Auth);
  
  notificationTypes = ['email', 'whatsapp'];
  notifyOptions = [
    { label: '1 Month before', value: '1months' },
    { label: '2 Weeks before', value: '2weeks' },
    { label: '3 Days before', value: '3days' }
  ];

  localData: EditCelebrantData = {
    name: '',
    birthDay: 1,
    birthMonth: 1,
    notificationType: [],
    notifyTimes: []
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.localData = {
        ...this.data,
        notificationType: this.normalizeNotificationType(this.data.notificationType),
        notifyTimes: this.normalizeNotifyTimes(this.data.notifyTimes)
      };
    }
    if (changes['open'] && this.open && this.data?.id) {
      this.loadSubscription(this.data.id);
    }
  }

  private normalizeNotificationType(types: string[] | number[] | undefined): string[] {
    if (!types || !Array.isArray(types)) return [];
    return types.map(t => {
      if (typeof t === 'number') {
        return NOTIFICATION_TYPE_MAP[t] || '';
      }
      const normalized = String(t).toLowerCase().trim();
      if (normalized === 'email') return 'email';
      if (normalized === 'whatsapp') return 'whatsapp';
      return normalized;
    }).filter(Boolean);
  }

  private normalizeNotifyTimes(times: string[] | number[] | undefined): string[] {
    if (!times || !Array.isArray(times)) return [];
    return times.map(t => {
      if (typeof t === 'number') {
        return NOTIFY_TIME_MAP[t] || '';
      }
      const normalized = String(t).toLowerCase().trim();
      if (normalized === 'one_month') return '1months';
      if (normalized === 'two_weeks') return '2weeks';
      if (normalized === 'three_days') return '3days';
      return normalized;
    }).filter(Boolean);
  }

  loadSubscription(celebrantId: string) {
    this.notificationService.getSubscription(celebrantId).subscribe({
      next: (sub: any) => {
        this.localData = {
          name: sub.name,
          birthDay: sub.birthDay,
          birthMonth: sub.birthMonth,
          notificationType: this.normalizeNotificationType(sub.notificationTypes),
          notifyTimes: this.normalizeNotifyTimes(sub.notifyTimes),
          id: celebrantId
        };
      },
      error: () => {
        this.localData = {
          name: this.data?.name || '',
          birthDay: this.data?.birthDay || 1,
          birthMonth: this.data?.birthMonth || 1,
          notificationType: [],
          notifyTimes: [],
          id: celebrantId
        };
      }
    });
  }

  toggleNotificationType(type: string) {
    if (this.localData.notificationType.includes(type)) {
      this.localData.notificationType = this.localData.notificationType.filter(t => t !== type);
    } else {
      this.localData.notificationType.push(type);
    }
  }

  toggleNotifyTime(value: string) {
    if (this.localData.notifyTimes.includes(value)) {
      this.localData.notifyTimes = this.localData.notifyTimes.filter(v => v !== value);
    } else {
      this.localData.notifyTimes.push(value);
    }
  }

  isNotificationTypeChecked(type: string): boolean {
    return this.localData.notificationType.includes(type);
  }

  isNotifyTimeChecked(value: string): boolean {
    return this.localData.notifyTimes.includes(value);
  }

  private toNumberArray(types: string[]): number[] {
    return types.map(t => {
      if (t === 'email') return 0;
      if (t === 'whatsapp') return 1;
      return -1;
    }).filter(v => v >= 0);
  }

  private toNotifyTimeNumbers(times: string[]): number[] {
    return times.map(t => {
      if (t === '1months') return 0;
      if (t === '2weeks') return 1;
      if (t === '3days') return 2;
      return -1;
    }).filter(v => v >= 0);
  }

  onSave() {
    const celebrantId = this.localData.id || this.data?.id || '';
    const userId = this.auth.currentUser?.uid || '';
    const payload: SubscriptionPayload = {
      userId,
      celebrantId,
      name: this.localData.name,
      birthDay: this.localData.birthDay,
      birthMonth: this.localData.birthMonth,
      notificationTypes: this.toNumberArray(this.localData.notificationType),
      notifyTimes: this.toNotifyTimeNumbers(this.localData.notifyTimes)
    };
    this.notificationService.saveSubscription(payload).subscribe({
      next: () => {
        this.save.emit({ ...this.localData, id: celebrantId });
      },
      error: () => {
        this.save.emit({ ...this.localData, id: celebrantId });
      }
    });
  }

  onClose() {
    this.closeModal.emit();
  }
}
