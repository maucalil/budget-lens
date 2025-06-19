import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserCreateDto } from '@core/models';
import { AuthService } from '@core/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '@shared/components';
import { InputComponent } from '@shared/components/form';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  imports: [ButtonComponent, InputComponent, FontAwesomeModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @Output() returnLogin = new EventEmitter<void>();

  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  faChevronLeft = faChevronLeft;

  authForm = this.fb.group({
    email: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    password: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    name: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  register(): void {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    const data: UserCreateDto = {
      email: this.authForm.value.email!,
      password: this.authForm.value.password!,
      name: this.authForm.value.name!,
    };

    this.authService.register(data).subscribe({
      next: () => {
        this.returnLogin.emit();
      },
    });
  }

  returnLoginClick(): void {
    this.returnLogin.emit();
  }
}
