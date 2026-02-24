// src/app/auth/auth.component.ts

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  email = '';
  password = '';
  isLogin = true;
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // If already logged in, redirect to celebrants
    this.authService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/celebrants']);
      }
    });
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.message = '';
  }

  async submit() {
    try {
      if (this.isLogin) {
        await this.authService.login(this.email, this.password);
        this.message = '✅ Login successful!';
        this.router.navigate(['/celebrants']);
      } else {
        await this.authService.signup(this.email, this.password);
        this.message = '✅ Signup successful!';
        this.router.navigate(['/celebrants']);
      }
    } catch (err: any) {
      this.message = `❌ ${err.message}`;
    }
  }
}
