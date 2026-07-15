import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from '../../core/services/auth-api';
import { AuthService } from '../../core/services/auth';
import {
  LucideAngularModule,
  Shield
} from 'lucide-angular';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, LucideAngularModule],
  templateUrl: './login.html',
})
export class Login {
  readonly Shield = Shield;
  private authService = inject(AuthService);
  private router = inject(Router);
private authApi = inject(AuthApiService);
  hidePassword = signal(true);

  loginForm = new FormGroup({

  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),

  password: new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]),

  rememberMe: new FormControl(true)

});
  togglePassword() {
    this.hidePassword.update(value => !value);
  }

  login() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';

    const rememberMe =
this.loginForm.value.rememberMe ?? true;

this.authApi.login(email, password).subscribe({

  next: (response: any) => {

  this.authService.login(response.user);

  if (rememberMe) {

    localStorage.setItem('isLoggedIn', 'true');

  } else {

    sessionStorage.setItem('isLoggedIn', 'true');

  }

  this.router.navigate(['/dashboard']);

  },

  error: () => {

    alert('Invalid Credentials');

  }

});
  }
}