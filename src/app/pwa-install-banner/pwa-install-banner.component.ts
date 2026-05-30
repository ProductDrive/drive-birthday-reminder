import { Component, inject } from '@angular/core';
import { PwaInstallService } from '../services/pwa-install.service';

@Component({
  selector: 'app-pwa-install-banner',
  standalone: true,
  template: `
    @if (pwaInstall.deferredPrompt()) {
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 z-50 animate-slide-up">
        <div class="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-md flex-shrink-0">B</div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">Install Birthday Reminder</p>
              <p class="text-xs text-gray-500">Get quick access & offline support</p>
            </div>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            <button (click)="close()"
              class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition">
              Not now
            </button>
            <button (click)="install()"
              class="px-5 py-2 text-sm bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition active:scale-[0.97]">
              Install
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    @keyframes slide-up {
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .animate-slide-up { animation: slide-up 0.3s ease-out; }
  `],
})
export class PwaInstallBannerComponent {
  pwaInstall = inject(PwaInstallService);

  install() {
    this.pwaInstall.install();
  }

  close() {
    this.pwaInstall.deferredPrompt.set(null);
  }
}
