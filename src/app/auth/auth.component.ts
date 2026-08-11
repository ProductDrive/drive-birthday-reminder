// src/app/auth/auth.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { environment } from '../../environment';

const SIGNUP_MAX_ATTEMPTS = 3;
const SIGNUP_LOCK_MS = 60 * 1000;
const RESEND_COOLDOWN_SECONDS = 60;

declare global {
  interface Window {
    grecaptcha?: any;
  }
}

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit, OnDestroy {
  email = '';
  password = '';
  isLogin = true;
  message = '';

  isVerifying = false;
  resendCountdown = 0;
  private resendTimer: ReturnType<typeof setInterval> | null = null;

  showForgotPassword = false;
  forgotEmail = '';
  forgotPasswordSent = false;
  forgotError = '';
  isSendingReset = false;

  // Anti-bot
  website = '';
  readonly recaptchaSiteKey = environment.recaptchaSiteKey || '';
  captchaResponse = '';
  private recaptchaWidgetId: number | undefined;
  signupLockSeconds = 0;

  constructor(private authService: AuthService, private router: Router, private auth: Auth) {}

  ngOnInit() {
    // If already logged in (and verified), redirect to celebrants
    this.authService.user$.subscribe(user => {
      if (user && user.emailVerified) {
        this.router.navigate(['/celebrants']);
      }
    });

    if (this.recaptchaSiteKey) {
      this.loadRecaptcha();
    }
  }

  ngOnDestroy() {
    this.clearResendTimer();
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.message = '';
    this.resetCaptcha();
  }

  // ── reCAPTCHA v2 (conditional on a configured site key) ──────────────
  private loadRecaptcha(): void {
    if (window.grecaptcha) {
      this.renderRecaptcha();
      return;
    }
    (window as any).onRecaptchaLoaded = () => this.renderRecaptcha();
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  private renderRecaptcha(): void {
    if (!this.recaptchaSiteKey || this.recaptchaWidgetId !== undefined || !window.grecaptcha) return;
    const container = document.getElementById('recaptcha-container');
    if (!container) return;
    this.recaptchaWidgetId = window.grecaptcha.render(container, {
      sitekey: this.recaptchaSiteKey,
      callback: (token: string) => { this.captchaResponse = token; },
      'expired-callback': () => { this.captchaResponse = ''; },
    });
  }

  private resetCaptcha(): void {
    this.captchaResponse = '';
    if (this.recaptchaWidgetId !== undefined && window.grecaptcha) {
      window.grecaptcha.reset(this.recaptchaWidgetId);
    }
  }

  // ── Signup rate limiting (client-side deterrent) ──────────────────────
  private signupKey(email: string): string {
    return `birthdayalert:signup:${email.trim().toLowerCase()}`;
  }

  private canSignup(): boolean {
    const raw = localStorage.getItem(this.signupKey(this.email));
    if (!raw) return true;
    try {
      const { until } = JSON.parse(raw);
      if (Date.now() < until) {
        this.signupLockSeconds = Math.ceil((until - Date.now()) / 1000);
        return false;
      }
    } catch { /* ignore corrupt entry */ }
    return true;
  }

  private recordSignupAttempt(): void {
    const key = this.signupKey(this.email);
    const raw = localStorage.getItem(key);
    let count = 0;
    if (raw) {
      try { count = JSON.parse(raw).count || 0; } catch { count = 0; }
    }
    count += 1;
    const lock = count >= SIGNUP_MAX_ATTEMPTS ? Date.now() + SIGNUP_LOCK_MS : 0;
    localStorage.setItem(key, JSON.stringify({ count, until: lock }));
  }

  // ── Submission ────────────────────────────────────────────────────────
  async submit() {
    this.message = '';
    // Honeypot: bots fill hidden fields; silently drop.
    if (this.website) return;

    if (this.recaptchaSiteKey && !this.captchaResponse) {
      this.message = '⚠️ Please complete the "I\'m not a robot" check first.';
      return;
    }

    try {
      if (this.isLogin) {
        await this.login();
      } else {
        await this.signup();
      }
    } catch (err: any) {
      console.error(err.message);
      this.message = `❌ Opps! Something went wrong please contact support.`;
    } finally {
      this.resetCaptcha();
    }
  }

  private async login(): Promise<void> {
    const cred = await this.authService.login(this.email, this.password);
    await this.authService.reloadUser();
    if (this.authService.isEmailVerified) {
      this.message = '✅ Login successful!';
      this.router.navigate(['/celebrants']);
    } else {
      this.isVerifying = true;
    }
  }

  private async signup(): Promise<void> {
    if (!this.canSignup()) {
      this.message = `❌ Too many signup attempts. Try again in ${this.signupLockSeconds}s.`;
      return;
    }
    await this.authService.signup(this.email, this.password);
    this.recordSignupAttempt();
    await this.authService.sendVerificationEmail();
    this.isVerifying = true;
  }

  // ── Verify email screen ───────────────────────────────────────────────
  resendVerification() {
    if (this.resendCountdown > 0) return;
    this.authService.sendVerificationEmail()
      .then(() => {
        this.message = '📧 Verification email resent. Check your inbox.';
        this.startResendCountdown();
      })
      .catch(() => {
        this.message = '❌ Could not resend the verification email. Please try again later.';
      });
  }

  async checkVerification() {
    await this.authService.reloadUser();
    if (this.authService.isEmailVerified) {
      const user = this.auth.currentUser;
      if (user) {
        await this.authService.createUserProfileIfMissing(user.uid);
      }
      this.message = '✅ Email verified!';
      this.router.navigate(['/celebrants']);
    } else {
      this.message = '❌ Not verified yet. Click the link in the email you received, then try again.';
    }
  }

  logoutFromVerify() {
    this.authService.logout();
    this.clearResendTimer();
    this.isVerifying = false;
    this.isLogin = true;
    this.message = '';
  }

  private startResendCountdown() {
    this.clearResendTimer();
    this.resendCountdown = RESEND_COOLDOWN_SECONDS;
    this.resendTimer = setInterval(() => {
      this.resendCountdown -= 1;
      if (this.resendCountdown <= 0) {
        this.clearResendTimer();
      }
    }, 1000);
  }

  private clearResendTimer() {
    if (this.resendTimer) {
      clearInterval(this.resendTimer);
      this.resendTimer = null;
    }
    this.resendCountdown = 0;
  }

  // ── Forgot password ───────────────────────────────────────────────────
  requestPasswordReset() {
    this.forgotError = '';
    if (!this.forgotEmail.trim()) {
      this.forgotError = 'Please enter your email address.';
      return;
    }
    this.isSendingReset = true;
    // Always show the generic confirmation (success or failure) to avoid
    // revealing whether an account exists for the address.
    this.authService.sendPasswordResetEmail(this.forgotEmail.trim())
      .then(() => { this.forgotPasswordSent = true; })
      .catch(() => { this.forgotPasswordSent = true; })
      .finally(() => { this.isSendingReset = false; });
  }

  backToLogin() {
    this.showForgotPassword = false;
    this.forgotPasswordSent = false;
    this.forgotError = '';
    this.forgotEmail = '';
  }
}
