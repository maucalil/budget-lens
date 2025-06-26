import { Component, inject } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SnackbarComponent } from '@core/layout/snackbar/snackbar.component';
import { LoaderService } from '@core/services';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '@shared/components';

@Component({
  selector: 'app-auth',
  imports: [
    LoginComponent,
    RegisterComponent,
    SnackbarComponent,
    SpinnerComponent,
    AsyncPipe,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  loading$ = inject(LoaderService).loading$;

  showLogin = true;

  switchToRegister(): void {
    this.showLogin = false;
  }

  switchToLogin(): void {
    this.showLogin = true;
  }
}
