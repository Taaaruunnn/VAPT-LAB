import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../../core/validators/password-match';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {

  private fb = inject(FormBuilder);
  private router = inject(Router);

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

    // Backend will come later

    alert('Registration Successful');

    this.router.navigate(['/login']);

  }

}