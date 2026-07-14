import { Injectable, inject, signal } from '@angular/core';
import { AuthApiService } from './auth-api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApi = inject(AuthApiService);

  isLoggedIn = signal(false);

  checkLogin() {

    this.authApi.me().subscribe({

      next: () => {

        this.isLoggedIn.set(true);

      },

      error: () => {

        this.isLoggedIn.set(false);

      }

    });

  }

  logout() {

    this.isLoggedIn.set(false);

  }

}