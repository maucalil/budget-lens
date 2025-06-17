import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isLoggedIn().pipe(
    tap(isLoggedIn => {
      if (!isLoggedIn) {
        console.log('redirecting');
        router.navigate(['/authenticate']);
      }
    })
  );
};
