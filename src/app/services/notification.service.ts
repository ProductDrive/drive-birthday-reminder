import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
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
}
