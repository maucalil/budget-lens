import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginDto } from '@core/models';
import { AuthService } from '@core/services';
import { ButtonComponent } from '@shared/components';
import { InputComponent } from '@shared/components/form';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Output() register = new EventEmitter<void>();

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  authForm = this.fb.group({
    email: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    password: this.fb.control<string | null>(null, [Validators.required]),
  });

  login(): void {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    const data: UserLoginDto = {
      email: this.authForm.value.email!,
      password: this.authForm.value.password!,
    };

    this.authService.login(data).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
    });
  }

  registerClick(): void {
    this.register.emit();
  }
}
