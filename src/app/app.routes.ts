import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CelebrantsComponent } from './celebrants.component/celebrants.component';
import { BirthdayFormComponent } from './birthday-form/birthday-form.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'celebrants', component: CelebrantsComponent },
    { path: 'form/:userId', component: BirthdayFormComponent },
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
