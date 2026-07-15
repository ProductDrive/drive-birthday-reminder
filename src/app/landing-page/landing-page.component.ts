import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  showIllustration = true;

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit() {
    if (this.auth.currentUser) {
      this.router.navigate(['/celebrants']);
    }
  }

  dismissIllustration() {
    this.showIllustration = false;
  }
}
