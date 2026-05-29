import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

export interface FcmMessage {
  title?: string;
  body?: string;
  data?: { [key: string]: string };
}

@Injectable({ providedIn: 'root' })
export class MessagingService {
  private baseUrl = environment.apiUrl;
  private messaging = getMessaging();
  private messageSubject = new Subject<FcmMessage>();
  public messages$: Observable<FcmMessage> = this.messageSubject.asObservable();

  constructor(private http: HttpClient) {
    this.listenForMessages();
  }

  async requestPermission(): Promise<boolean> {
    try {
      const permission = await Notification.requestPermission();
      console.log('Notification permission status:', permission);
      return permission === 'granted';
    } catch {
      return false;
    }
  }

  async getFcmToken(): Promise<string | null> {
    try {
      const vapidKey = (environment.firebase as any).vapidKey;
      if (!vapidKey) {
        console.warn('VAPID key not configured in environment');
        return null;
      }
      const currentToken = await getToken(this.messaging, { vapidKey });
      return currentToken || null;
    } catch (err) {
      console.error('Failed to get FCM token', err);
      return null;
    }
  }

  registerTokenWithBackend(userId: string, token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/birthday/register-token`, {
      userId,
      token,
      platform: 'web'
    });
  }

  unregisterTokenWithBackend(userId: string, token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/birthday/unregister-token`, {
      userId,
      token
    });
  }

  private listenForMessages(): void {
    onMessage(this.messaging, (payload) => {
      const message: FcmMessage = {
        title: payload.notification?.title,
        body: payload.notification?.body,
        data: payload.data as { [key: string]: string } | undefined
      };
      this.messageSubject.next(message);
    });
  }
}
