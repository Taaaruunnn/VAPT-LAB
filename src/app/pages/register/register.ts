import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../../core/validators/password-match';
import { AuthApiService } from '../../core/services/auth-api';
import { AuthService } from '../../core/services/auth';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authApi = inject(AuthApiService);
  private authService = inject(AuthService);
  registerForm = this.fb.group(
  {
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
  },
  {
    validators: passwordMatchValidator,
  }
);

  register() {

  if (this.registerForm.invalid) {

    this.registerForm.markAllAsTouched();

    return;

  }

  const name =
    this.registerForm.value.fullName ?? '';

  const email =
    this.registerForm.value.email ?? '';

  const password =
    this.registerForm.value.password ?? '';

  this.authApi
    .register(name, email, password)
    .subscribe({

      next: () => {

        alert('Registration Successful');

        this.router.navigate(['/login']);

      },

      error: (err) => {

        alert(

          err.error?.message ||

          'Registration Failed'

        );

      }

    });

}

}