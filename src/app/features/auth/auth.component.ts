import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  showLogin = true;

  switchToRegister(): void {
    this.showLogin = false;
  }

  switchToLogin(): void {
    this.showLogin = true;
  }
}
