import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PwaInstallService {
  deferredPrompt = signal<Event | null>(null);

  constructor() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt.set(e);
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPrompt.set(null);
    });
  }

  async install(): Promise<void> {
    const prompt = this.deferredPrompt();
    if (!prompt) return;
    (prompt as any).prompt();
    const result = await (prompt as any).userChoice;
    if (result.outcome === 'accepted') {
      this.deferredPrompt.set(null);
    }
  }
}
