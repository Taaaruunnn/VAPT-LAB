import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {

  const auth = inject(AuthService);

  const router = inject(Router);

  return auth.checkLoginGuard().pipe(

    map((loggedIn) => {

      return loggedIn

        ? true

        : router.createUrlTree(['/login']);

    })

  );

};