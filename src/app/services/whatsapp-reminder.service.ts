import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment';
import { Observable } from 'rxjs';

export interface CelebrantReminder {
  celebrantId: string;
  name: string;
  birthDay: number;
  birthMonth: number;
  notifyTime: string;
  daysUntilBirthday: number;
  message: string;
}

export interface WhatsAppSubscriber {
  userId: string;
  userName: string;
  whatsappNumber: string;
  celebrants: CelebrantReminder[];
}

@Injectable({ providedIn: 'root' })
export class WhatsappReminderService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  requestOtp(): Observable<{ sessionId: string }> {
    return this.http.post<{ sessionId: string }>(`${this.baseUrl}/api/WhatsAppReminder/request-otp`, {});
  }

  verifyOtp(sessionId: string, code: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/api/WhatsAppReminder/verify-otp`, {
      sessionId,
      code
    });
  }

  getSubscribers(token: string): Observable<WhatsAppSubscriber[]> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<WhatsAppSubscriber[]>(`${this.baseUrl}/api/WhatsAppReminder/subscribers`, { headers });
  }
}
