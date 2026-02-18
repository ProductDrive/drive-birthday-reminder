import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrantsService, Celebrant } from '../services/celebrants.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-celebrants',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, AsyncPipe, MatIconModule],
  templateUrl: './celebrants.component.html',
  styleUrls: ['./celebrants.component.scss'],
})
export class CelebrantsComponent implements OnInit {
  celebrants$!: Observable<Celebrant[]>;

  constructor(
    private celebrantsService: CelebrantsService,
    private router: Router,
    private auth: Auth,
    private cLink: string
  ) { }

  ngOnInit(): void {
    const user = this.auth.currentUser;
    this.celebrants$ = this.celebrantsService.getCelebrants();
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

  copyInviteLink() {
    const user = this.auth.currentUser;
    if (!user) {
      alert('You must be logged in to copy invite link.');
      return;
    }

    const link = `${window.location.origin}/form/${user.uid}`;
    navigator.clipboard.writeText(link);
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
