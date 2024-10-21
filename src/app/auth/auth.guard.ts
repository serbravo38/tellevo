import { CanActivateFn } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> => {
  const afAuth = inject(AngularFireAuth);
  const router = inject(Router);

  return afAuth.authState.pipe(
    take(1),
    map(user => {
      if (user) {
        return true; // Usuario autenticado
      } else {
        return router.createUrlTree(['/home']); // Redirige con UrlTree a la página de login
      }
    })
  );
};
