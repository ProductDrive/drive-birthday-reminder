import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('firebase-messaging-sw.js')
        .then((registration) => {
          console.log('FCM service worker registered:', registration.scope);
        })
        .catch((err) => {
          console.error('FCM service worker registration failed:', err);
        });
    }
  })
  .catch((err) => console.error(err));
