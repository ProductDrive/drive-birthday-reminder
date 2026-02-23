import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrantsService, Celebrant } from '../services/celebrants.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { CelebrantsEditModalComponent, EditCelebrantData } from './celebrants-edit-modal.component';

@Component({
  selector: 'app-celebrants',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AsyncPipe,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    CelebrantsEditModalComponent
  ],
  templateUrl: './celebrants.component.html',
  styleUrls: ['./celebrants.component.scss'],
})
export class CelebrantsComponent implements OnInit {
        showEditModal = false;
        editData: EditCelebrantData | null = null;
        editingCelebrantId: string | null = null;
  editCelebrant(celebrant: Celebrant) {
    this.editingCelebrantId = celebrant.id || null;
    this.editData = {
      name: celebrant.name,
      birthDay: celebrant.birthDay,
      birthMonth: celebrant.birthMonth,
      notificationType: 'whatsapp',
      notifyTimes: []
    };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editData = null;
    this.editingCelebrantId = null;
  }

  async saveEditModal(data: EditCelebrantData) {
    if (this.editingCelebrantId) {
      await this.celebrantsService.updateCelebrant(this.editingCelebrantId, {
        name: data.name,
        birthDay: data.birthDay,
        birthMonth: data.birthMonth
        // You can add notificationType and notifyTimes to Firestore if desired
      });
    }
    this.closeEditModal();
  }
    monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    formatBirthday(day: number, month: number): string {
      const dayStr = day.toString().padStart(2, '0');
      const monthStr = this.monthNames[month - 1] || month.toString();
      return `${dayStr} / ${monthStr}`;
    }
  celebrants$!: Observable<Celebrant[]>;
  get inviteLink(): string {
    const user = this.auth.currentUser;
    return user ? `${window.location.origin}/form/${user.uid}` : '';
  }

  constructor(
    private celebrantsService: CelebrantsService,
    private router: Router,
    private auth: Auth,
  ) { }

  ngOnInit(): void {
    const user = this.auth.currentUser;
    this.celebrants$ = this.celebrantsService.getCelebrants().pipe(
      // Sort by birthMonth, then birthDay
      map((celebrants: Celebrant[]) => celebrants.slice().sort((a, b) => {
        if (a.birthMonth !== b.birthMonth) {
          return a.birthMonth - b.birthMonth;
        }
        return a.birthDay - b.birthDay;
      }))
    );
  }

  async shortenUrl(longUrl: string): Promise<string> {
    const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    return res.text();
  }


  async sendWishes(celebrant: Celebrant) {
    const defaultMessage = `Happy Birthday ${celebrant.name}! 🎉`;

    let pictureLink = '';
    if (celebrant.pictureUrl) {
      pictureLink = await this.shortenUrl(celebrant.pictureUrl);
    }

    let fullMessage = '';

    if (pictureLink && celebrant.message) {
      // Both picture and custom message exist
      fullMessage = `${celebrant.message}\n\n${pictureLink}`;
    } else if (pictureLink && !celebrant.message) {
      // Only picture exists, use default message
      fullMessage = `${defaultMessage}\n\n${pictureLink}`;
    } else if (!pictureLink && celebrant.message) {
      // Only custom message exists
      fullMessage = celebrant.message;
    } else {
      // Neither exists, use default message
      fullMessage = defaultMessage;
    }

    const url = `https://wa.me/?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank');
  }

  addCelebrant() {
    const user = this.auth.currentUser;
    if (user) {
      this.router.navigate(['/form', user.uid]);
    }
  }

  copyInviteLink() {
    const user = this.auth.currentUser;
    if (!user) {
      alert('You must be logged in to copy invite link.');
      return;
    }
    navigator.clipboard.writeText(this.inviteLink);
    alert('Invite link copied to clipboard!');
  }

  openForm() {
    const user = this.auth.currentUser;
    if (!user) {
      alert('You must be logged in to access the form.');
      return;
    }
    const link = `${window.location.origin}/form/${user?.uid}`;
    window.open(link, '_blank');
  }

}
