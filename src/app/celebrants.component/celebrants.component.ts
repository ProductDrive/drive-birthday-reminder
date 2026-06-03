import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrantsService, Celebrant } from '../services/celebrants.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { CelebrantsEditModalComponent, EditCelebrantData } from './celebrants-edit-modal.component';
import { AuthService, UserProfile } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MessagingService } from '../services/messaging.service';
import { BirthdayCardService } from '../services/birthday-card.service';
import { TemplateService, CardTemplate } from '../services/template.service';

@Component({
  selector: 'app-celebrants',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AsyncPipe,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    CelebrantsEditModalComponent
  ],
  templateUrl: './celebrants.component.html',
  styleUrls: ['./celebrants.component.scss'],
})
export class CelebrantsComponent implements OnInit {
  showEditModal = false;
  editData: EditCelebrantData | null = null;
  editingCelebrantId: string | null = null;

  showWhatsappSettings = false;
  whatsappNumber = '';
  whatsappOptIn = false;
  userProfile: UserProfile | null = null;
  isSavingWhatsapp = false;

  templates$: Observable<CardTemplate[]>;
  selectedTemplate = 'classic-balloon';
  isSavingTemplate = false;

  customMessages: Record<string, string> = {};
  expandedCustomMessage: Record<string, boolean> = {};

  editCelebrant(celebrant: Celebrant) {
    this.editingCelebrantId = celebrant.id || null;
    this.editData = {
      id: celebrant.id,
      name: celebrant.name,
      birthDay: celebrant.birthDay,
      birthMonth: celebrant.birthMonth,
      notificationType: [],
      notifyTimes: []
    };
    this.showEditModal = true;
  }

  onModalOpen() {
    if (this.editData?.id) {
      const modal = document.querySelector('app-celebrants-edit-modal');
      if (modal && (modal as any).onOpen) {
        (modal as any).onOpen();
      }
    }
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editData = null;
    this.editingCelebrantId = null;
  }

  async saveEditModal(data: EditCelebrantData) {
    if (this.editingCelebrantId) {
      await this.celebrantsService.updateCelebrant(this.editingCelebrantId, {
        name: data.name,
        birthDay: data.birthDay,
        birthMonth: data.birthMonth
      });
    }
    this.closeEditModal();
  }

  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  formatBirthday(day: number, month: number): string {
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = this.monthNames[month - 1] || month.toString();
    return `${dayStr} / ${monthStr}`;
  }

  celebrants$!: Observable<Celebrant[]>;

  get inviteLink(): string {
    const user = this.auth.currentUser;
    return user ? `${window.location.origin}/form/${user.uid}` : '';
  }

  constructor(
    private celebrantsService: CelebrantsService,
    private router: Router,
    private auth: Auth,
    private authService: AuthService,
    private messagingService: MessagingService,
    private birthdayCardService: BirthdayCardService,
    private templateService: TemplateService,
  ) {
    this.templates$ = this.templateService.getTemplates();
  }

  ngOnInit(): void {
    const user = this.auth.currentUser;
    this.celebrants$ = this.celebrantsService.getCelebrants().pipe(
      map((celebrants: Celebrant[]) => celebrants.slice().sort((a, b) => {
        if (a.birthMonth !== b.birthMonth) {
          return a.birthMonth - b.birthMonth;
        }
        return a.birthDay - b.birthDay;
      }))
    );
    this.loadUserProfile();
    this.requestNotificationPermission();
  }

  async loadUserProfile() {
    const user = this.auth.currentUser;
    if (user) {
      this.userProfile = await this.authService.getUserProfile(user.uid);
      if (this.userProfile) {
        this.whatsappNumber = this.userProfile.whatsappNumber || '';
        this.whatsappOptIn = this.userProfile.whatsappOptIn || false;
        this.selectedTemplate = this.userProfile.selectedTemplate || 'classic-balloon';
      }
    }
  }

  private async requestNotificationPermission() {
    const user = this.auth.currentUser;
    if (!user) return;

    const granted = await this.messagingService.requestPermission();
    if (granted) {
      const token = await this.messagingService.getFcmToken();
      if (token) {
        this.messagingService.registerTokenWithBackend(user.uid, token).subscribe();
      }
    }
  }

  async saveWhatsappSettings() {
    const user = this.auth.currentUser;
    if (!user) return;
    
    this.isSavingWhatsapp = true;
    try {
      await this.authService.updateUserProfile(user.uid, {
        whatsappNumber: this.whatsappNumber,
        whatsappOptIn: this.whatsappOptIn
      });
      this.showWhatsappSettings = false;
    } catch (error) {
      console.error('Error saving WhatsApp settings:', error);
    } finally {
      this.isSavingWhatsapp = false;
    }
  }

  async onTemplateChange(templateShortName: string) {
    this.selectedTemplate = templateShortName;
    const user = this.auth.currentUser;
    if (!user) return;
    this.isSavingTemplate = true;
    try {
      await this.authService.updateUserProfile(user.uid, { selectedTemplate: templateShortName });
    } catch (err) {
      console.error('Failed to save template preference:', err);
    } finally {
      this.isSavingTemplate = false;
    }
  }

  getTemplateCharLimit(): number {
    return this.birthdayCardService.getMaxMessageLength(this.selectedTemplate);
  }

  getCustomMessageRemaining(celebrantId: string): number {
    const len = (this.customMessages[celebrantId] || '').length;
    return this.getTemplateCharLimit() - len;
  }

  async sendWishes(celebrant: Celebrant) {
    try {
      const custom = (this.customMessages[celebrant.id!] || '').trim();
      const blob = await this.birthdayCardService.generateCardBlob({
        name: celebrant.name,
        message: custom || celebrant.message,
      }, this.selectedTemplate);

      delete this.customMessages[celebrant.id!];
      delete this.expandedCustomMessage[celebrant.id!];

      const file = new File([blob], 'birthday-card.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Birthday Card',
          files: [file],
        });
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `birthday-${celebrant.name.replace(/\s+/g, '-').toLowerCase()}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      console.error('Failed to share card:', err);
      alert('Could not generate birthday card. Please try again.');
    }
  }

  addCelebrant() {
    const user = this.auth.currentUser;
    if (user) {
      this.router.navigate(['/form', user.uid]);
    }
  }

  copyInviteLink() {
    const user = this.auth.currentUser;
    if (!user) {
      alert('You must be logged in to copy invite link.');
      return;
    }
    navigator.clipboard.writeText(this.inviteLink);
    alert('Invite link copied to clipboard!');
  }

  openForm() {
    const user = this.auth.currentUser;
    if (!user) {
      alert('You must be logged in to access the form.');
      return;
    }
    const link = `${window.location.origin}/form/${user?.uid}`;
    window.open(link, '_blank');
  }
}
