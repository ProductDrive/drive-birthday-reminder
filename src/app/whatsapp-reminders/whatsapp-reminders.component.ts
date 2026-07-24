import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WhatsappReminderService, WhatsAppSubscriber } from '../services/whatsapp-reminder.service';

const TOKEN_KEY = 'whatsapp_reminder_token';
const OTP_LENGTH = 6;

@Component({
  selector: 'app-whatsapp-reminders',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './whatsapp-reminders.component.html',
  styleUrls: ['./whatsapp-reminders.component.scss']
})
export class WhatsappRemindersComponent implements OnInit {
  otpPending = true;
  sessionId = '';
  otpCode: string[] = Array(OTP_LENGTH).fill('');
  otpError = '';
  otpLoading = false;
  otpSent = false;

  subscribers: WhatsAppSubscriber[] = [];
  loading = false;
  loadError = '';
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(
    private reminderService: WhatsappReminderService,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    const savedToken = sessionStorage.getItem(TOKEN_KEY);
    if (savedToken) {
      this.loadSubscribers(savedToken);
    }
  }

  requestOtp(): void {
    if (this.otpLoading) return;

    this.otpLoading = true;
    this.otpError = '';

    this.reminderService.requestOtp().subscribe({
      next: (res) => {
        this.sessionId = res.sessionId;
        this.otpSent = true;
        this.otpLoading = false;
        this.otpCode = Array(OTP_LENGTH).fill('');
        setTimeout(() => {
          this.getInputs().forEach(i => i.value = '');
          this.focusInput(0);
        });
      },
      error: () => {
        this.otpError = 'Failed to send OTP. Please try again.';
        this.otpLoading = false;
      }
    });
  }

  verifyOtp(): void {
    const code = this.otpCode.join('');
    if (code.length !== OTP_LENGTH) {
      this.otpError = 'Please enter all 6 digits.';
      return;
    }

    this.otpLoading = true;
    this.otpError = '';

    this.reminderService.verifyOtp(this.sessionId, code).subscribe({
      next: (res) => {
        sessionStorage.setItem(TOKEN_KEY, res.token);
        this.otpPending = false;
        this.otpLoading = false;
        this.loadSubscribers(res.token);
      },
      error: () => {
        this.otpError = 'Invalid or expired OTP. Please try again.';
        this.otpLoading = false;
      }
    });
  }

  onOtpInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const digit = input.value.replace(/\D/g, '').slice(-1);

    input.value = digit;
    this.otpCode[index] = digit;

    if (digit && index < OTP_LENGTH - 1) {
      this.focusInput(index + 1);
    }
  }

  onOtpKeydown(index: number, event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace') {
      event.preventDefault();
      if (this.otpCode[index]) {
        this.otpCode[index] = '';
        input.value = '';
      } else if (index > 0) {
        this.otpCode[index - 1] = '';
        this.setInputValue(index - 1, '');
        this.focusInput(index - 1);
      }
    } else if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      this.focusInput(index - 1);
    } else if (event.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      event.preventDefault();
      this.focusInput(index + 1);
    }
  }

  onOtpPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text')?.replace(/\D/g, '').slice(0, OTP_LENGTH) ?? '';
    if (!pasted) return;

    for (let i = 0; i < OTP_LENGTH; i++) {
      const char = pasted[i] ?? '';
      this.otpCode[i] = char;
      this.setInputValue(i, char);
    }

    const nextEmpty = this.otpCode.findIndex(d => d === '');
    this.focusInput(nextEmpty === -1 ? OTP_LENGTH - 1 : nextEmpty);
  }

  private getInputs(): HTMLInputElement[] {
    return Array.from(this.elRef.nativeElement.querySelectorAll('.otp-input'));
  }

  private focusInput(index: number): void {
    const inputs = this.getInputs();
    inputs[index]?.focus();
  }

  private setInputValue(index: number, value: string): void {
    const inputs = this.getInputs();
    if (inputs[index]) inputs[index].value = value;
  }

  loadSubscribers(token: string): void {
    this.loading = true;
    this.loadError = '';

    this.reminderService.getSubscribers(token).subscribe({
      next: (data) => {
        this.subscribers = data;
        this.loading = false;
        this.otpPending = false;
      },
      error: (err) => {
        if (err.status === 401) {
          sessionStorage.removeItem(TOKEN_KEY);
          this.otpPending = true;
          this.subscribers = [];
        } else {
          this.loadError = 'Failed to load subscribers.';
        }
        this.loading = false;
      }
    });
  }

  refresh(): void {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token) this.loadSubscribers(token);
  }

  logout(): void {
    sessionStorage.removeItem(TOKEN_KEY);
    this.subscribers = [];
    this.otpPending = true;
    this.otpSent = false;
    this.otpCode = Array(OTP_LENGTH).fill('');
    this.otpError = '';
  }

  formatBirthday(day: number, month: number): string {
    return `${this.monthNames[month - 1]} ${day}`;
  }

  formatNotifyTime(nt: string): string {
    const map: Record<string, string> = {
      'OneMonthBefore': '1 month',
      'TwoWeeksBefore': '2 weeks',
      'ThreeDaysBefore': '3 days'
    };
    return map[nt] || nt;
  }

  get totalCelebrants(): number {
    return this.subscribers.reduce((sum, s) => sum + s.celebrants.length, 0);
  }
}
