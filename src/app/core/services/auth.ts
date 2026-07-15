import { Injectable, inject, signal } from '@angular/core';
import { AuthApiService } from './auth-api';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApi = inject(AuthApiService);

  isLoggedIn = signal(false);

  currentUser = signal<User | null>(null);

  checkLogin() {

    this.authApi.me().subscribe({

      next: (response: any) => {

        this.isLoggedIn.set(true);

        this.currentUser.set(response.user);

      },

      error: () => {

        this.isLoggedIn.set(false);

        this.currentUser.set(null);

      }

    });

  }

  login(user: User) {

    this.isLoggedIn.set(true);

    this.currentUser.set(user);

  }

  logout() {

    this.isLoggedIn.set(false);

    this.currentUser.set(null);

  }
checkLoginGuard(): Observable<boolean> {

  if (this.isLoggedIn()) {

    return of(true);

  }

  return this.authApi.me().pipe(

    map((response: any) => {

      this.isLoggedIn.set(true);

      this.currentUser.set(response.user);

      return true;

    }),

    catchError(() => {

      this.isLoggedIn.set(false);

      this.currentUser.set(null);

      return of(false);

    })

  );

}
}