
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CelebrantsComponent } from './celebrants.component/celebrants.component';
import { BirthdayFormComponent } from './birthday-form/birthday-form.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'celebrants', component: CelebrantsComponent, canActivate: [authGuard] },
    { path: 'form/:userId', component: BirthdayFormComponent, canActivate: [authGuard] },
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
