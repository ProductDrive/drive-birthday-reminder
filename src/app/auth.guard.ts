
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  // Wait for the user observable to emit (handles async auth state)
  const user = await new Promise(resolve => {
    const sub = authService.user$.subscribe(u => {
      resolve(u);
      sub.unsubscribe();
    });
  });
  if (user) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }
};
