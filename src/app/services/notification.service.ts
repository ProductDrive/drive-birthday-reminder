import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { Observable } from 'rxjs';

export interface SubscriptionPayload {
  userId: string;
  celebrantId: string;
  name: string;
  birthDay: number;
  birthMonth: number;
  notificationTypes: number[];
  notifyTimes: number[];
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSubscription(celebrantId: string): Observable<SubscriptionPayload> {
    return this.http.get<SubscriptionPayload>(`${this.baseUrl}/api/birthday/subscription/${celebrantId}`);
  }

  saveSubscription(payload: SubscriptionPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/birthday/subscribe`, payload);
  }

  verifyRecaptcha(token: string): Observable<{ valid: boolean; score?: number }> {
    return this.http.post<{ valid: boolean; score?: number }>(`${this.baseUrl}/api/birthday/verify-recaptcha`, { token });
  }

  requestAccountDeletion(data: { userId: string; email: string; reason?: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/birthday/request-deletion`, data);
  }
}
