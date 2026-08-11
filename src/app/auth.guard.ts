
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = await firstValueFrom(authService.user$);
  if (!user) {
    router.navigate(['/auth']);
    return false;
  }
  // emailVerified is cached in the client; reload to get the fresh status.
  await user.reload();
  if (user.emailVerified) {
    return true;
  }
  router.navigate(['/auth']);
  return false;
};
