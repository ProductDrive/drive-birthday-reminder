
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CelebrantsComponent } from './celebrants.component/celebrants.component';
import { BirthdayFormComponent } from './birthday-form/birthday-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TemplatesGalleryComponent } from './templates-gallery/templates-gallery.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'celebrants', component: CelebrantsComponent, canActivate: [authGuard] },
    { path: 'templates', component: TemplatesGalleryComponent, canActivate: [authGuard] },
    { path: 'form/:userId', component: BirthdayFormComponent },
];
