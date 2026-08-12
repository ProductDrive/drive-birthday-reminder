import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PwaInstallService {
  deferredPrompt = signal<Event | null>(null);

  constructor() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      if (!this.deferredPrompt()) {
        this.deferredPrompt.set(e);
        console.info('[PWA] install prompt captured; banner shown. Waiting for user to call prompt().');
      }
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPrompt.set(null);
    });
  }

  async install(): Promise<void> {
    const prompt = this.deferredPrompt();
    if (!prompt) return;
    try {
      (prompt as any).prompt();
      const result = await (prompt as any).userChoice;
      if (result?.outcome === 'accepted') {
        this.deferredPrompt.set(null);
      }
    } catch {
      this.deferredPrompt.set(null);
    }
  }
}
