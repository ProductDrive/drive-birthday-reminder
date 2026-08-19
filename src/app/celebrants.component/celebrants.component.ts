import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrantsService, Celebrant } from '../services/celebrants.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, firstValueFrom } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { CelebrantsEditModalComponent, EditCelebrantData } from './celebrants-edit-modal.component';
import { AuthService, UserProfile } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MessagingService } from '../services/messaging.service';
import { BirthdayCardService } from '../services/birthday-card.service';
import { NotificationService } from '../services/notification.service';
import { PoliciesPopupComponent } from '../policies-popup/policies-popup.component';

const UNGROUPED_KEY = '__ungrouped__';

interface CelebrantSection {
  label: string;
  count: number;
  celebrants: Celebrant[];
}

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
    FormsModule,
    CelebrantsEditModalComponent,
    PoliciesPopupComponent
  ],
  templateUrl: './celebrants.component.html',
  styleUrls: ['./celebrants.component.scss'],
})
export class CelebrantsComponent implements OnInit {
  showEditModal = false;
  editData: EditCelebrantData | null = null;
  editingCelebrantId: string | null = null;

  quickActionsOpen = false;

  groups: string[] = [];
  selectedGroup = 'all';
  allCelebrants: Celebrant[] = [];
  sections: CelebrantSection[] = [];
  groupCounts: Record<string, number> = {};
  ungroupedCount = 0;
  readonly ungroupedKey = UNGROUPED_KEY;

  showWhatsappSettings = false;
  whatsappNumber = '';
  whatsappOptIn = false;
  userProfile: UserProfile | null = null;
  isSavingWhatsapp = false;

  showTemplateBanner = false;
  showTemplatePrompt = false;
  pendingWishCelebrant: Celebrant | null = null;
  wishPromptConfirmed = false;

  selectedTemplate = 'celebration-classic';

  customMessages: Record<string, string> = {};
  expandedCustomMessage: Record<string, boolean> = {};

  showTodayBanner = true;
  todayCelebrants: Celebrant[] = [];

  // Policy acceptance popup for existing users
  showPoliciesPopup = false;
  policiesPopupTab: 'privacy' | 'cookies' = 'privacy';

  // Account deletion
  showDeletionConfirm = false;
  isRequestingDeletion = false;
  deletionReason = '';
  deletionRequested = false;

  editCelebrant(celebrant: Celebrant) {
    this.editingCelebrantId = celebrant.id || null;
    this.editData = {
      id: celebrant.id,
      name: celebrant.name,
      birthDay: celebrant.birthDay,
      birthMonth: celebrant.birthMonth,
      group: celebrant.group || '',
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
        birthMonth: data.birthMonth,
        group: data.group || ''
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

  get selectedTemplateName(): string {
    const info = this.birthdayCardService.getTemplateInfo(this.selectedTemplate);
    return info ? `${info.emoji} ${info.displayName}` : this.selectedTemplate;
  }

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
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    const user = this.auth.currentUser;
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1;

    this.celebrants$ = this.celebrantsService.getCelebrants().pipe(
      map((celebrants: Celebrant[]) => {
        this.todayCelebrants = celebrants.filter(
          c => c.birthDay === todayDay && c.birthMonth === todayMonth
        );

        const now = new Date();
        const currentYear = now.getFullYear();
        const sorted = celebrants.slice().sort((a, b) => {
          const nextA = new Date(currentYear, a.birthMonth - 1, a.birthDay);
          const nextB = new Date(currentYear, b.birthMonth - 1, b.birthDay);

          if (nextA < now) nextA.setFullYear(currentYear + 1);
          if (nextB < now) nextB.setFullYear(currentYear + 1);

          const diff = nextA.getTime() - nextB.getTime();
          if (diff !== 0) return diff;
          return a.name.localeCompare(b.name);
        });

        this.allCelebrants = sorted;

        const groupMap = new Map<string, Celebrant[]>();
        const ungrouped: Celebrant[] = [];
        sorted.forEach(c => {
          const g = c.group?.trim();
          if (g) {
            if (!groupMap.has(g)) groupMap.set(g, []);
            groupMap.get(g)!.push(c);
          } else {
            ungrouped.push(c);
          }
        });

        this.groups = Array.from(groupMap.keys()).sort((a, b) => a.localeCompare(b));
        this.groupCounts = {};
        groupMap.forEach((list, g) => { this.groupCounts[g] = list.length; });
        this.ungroupedCount = ungrouped.length;

        const grouped = this.groups.map(g => ({
          label: g,
          count: this.groupCounts[g],
          celebrants: groupMap.get(g)!
        }));
        this.sections = ungrouped.length
          ? [...grouped, { label: 'Ungrouped', count: ungrouped.length, celebrants: ungrouped }]
          : grouped;

        return sorted;
      })
    );
    this.loadUserProfile();
    this.requestNotificationPermission();
  }

  dismissTodayBanner() {
    this.showTodayBanner = false;
  }

  filterByGroup(groupKey: string) {
    this.selectedGroup = groupKey;
  }

  get hasUngrouped(): boolean {
    return this.ungroupedCount > 0;
  }

  get visibleSections(): CelebrantSection[] {
    if (this.selectedGroup === 'all') return this.sections;
    const target = this.selectedGroup === UNGROUPED_KEY ? 'Ungrouped' : this.selectedGroup;
    return this.sections.filter(s => s.label === target);
  }

  trackBySection(_index: number, section: CelebrantSection): string {
    return section.label;
  }

  trackByCelebrant(_index: number, celebrant: Celebrant): string {
    return celebrant.id || '';
  }

  async loadUserProfile() {
    const user = this.auth.currentUser;
    if (user) {
      this.userProfile = await this.authService.getUserProfile(user.uid);
      if (this.userProfile) {
        this.whatsappNumber = this.userProfile.whatsappNumber || '';
        this.whatsappOptIn = this.userProfile.whatsappOptIn || false;
        this.selectedTemplate = this.userProfile.selectedTemplate || 'celebration-classic';
        // Show policy acceptance popup for existing users who haven't accepted
        if (!this.userProfile.policiesAccepted) {
          this.showPoliciesPopup = true;
        }
      } else {
        // No profile yet — show policy popup
        this.showPoliciesPopup = true;
      }
      const bannerDismissed = localStorage.getItem(this.templateBannerKey(user.uid)) === '1';
      this.showTemplateBanner = !this.userProfile?.selectedTemplate && !bannerDismissed;
    }
  }

  private templateBannerKey(uid: string): string {
    return `birthdayalert:template-banner-dismissed:${uid}`;
  }

  dismissTemplateBanner() {
    this.showTemplateBanner = false;
    const user = this.auth.currentUser;
    if (user) {
      localStorage.setItem(this.templateBannerKey(user.uid), '1');
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

  getTemplateCharLimit(): number {
    return this.birthdayCardService.getMaxMessageLength(this.selectedTemplate);
  }

  getCustomMessageRemaining(celebrantId: string): number {
    const len = (this.customMessages[celebrantId] || '').length;
    return this.getTemplateCharLimit() - len;
  }

  async sendWishes(celebrant: Celebrant) {
    if (!this.userProfile?.selectedTemplate && !this.wishPromptConfirmed) {
      this.pendingWishCelebrant = celebrant;
      this.showTemplatePrompt = true;
      return;
    }
    await this.generateAndShareCard(celebrant);
  }

  pickTemplateFromPrompt() {
    this.showTemplatePrompt = false;
    this.pendingWishCelebrant = null;
    this.viewAllTemplates();
  }

  sendWithDefaultTemplate() {
    this.wishPromptConfirmed = true;
    this.showTemplatePrompt = false;
    const celebrant = this.pendingWishCelebrant;
    this.pendingWishCelebrant = null;
    if (celebrant) {
      this.generateAndShareCard(celebrant);
    }
  }

  cancelTemplatePrompt() {
    this.showTemplatePrompt = false;
    this.pendingWishCelebrant = null;
  }

  private async generateAndShareCard(celebrant: Celebrant) {
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

  viewAllTemplates() {
    this.router.navigate(['/templates']);
  }

  // ── Policy acceptance ────────────────────────────────────────────────
  openPoliciesPopup(tab: 'privacy' | 'cookies') {
    this.policiesPopupTab = tab;
    this.showPoliciesPopup = true;
  }

  async acceptPolicies() {
    const user = this.auth.currentUser;
    if (user) {
      await this.authService.acceptPolicies(user.uid);
      if (this.userProfile) {
        this.userProfile.policiesAccepted = true;
      }
    }
    this.showPoliciesPopup = false;
  }

  // ── Logout ───────────────────────────────────────────────────────────
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  // ── Account deletion request ─────────────────────────────────────────
  openDeletionConfirm() {
    this.showDeletionConfirm = true;
    this.deletionReason = '';
  }

  closeDeletionConfirm() {
    this.showDeletionConfirm = false;
    this.deletionReason = '';
  }

  async requestAccountDeletion() {
    const user = this.auth.currentUser;
    if (!user) return;

    this.isRequestingDeletion = true;
    try {
      await firstValueFrom(
        this.notificationService.requestAccountDeletion({
          userId: user.uid,
          email: user.email || '',
          reason: this.deletionReason
        })
      );
      this.deletionRequested = true;
      this.showDeletionConfirm = false;
    } catch (err) {
      console.error('Deletion request failed:', err);
      alert('Failed to submit deletion request. Please try again or contact support.');
    } finally {
      this.isRequestingDeletion = false;
    }
  }
}
