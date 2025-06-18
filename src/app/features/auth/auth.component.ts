import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDto } from '@core/models';
import { AuthService } from '@core/services';
import { ButtonComponent } from '@shared/components';

@Component({
  selector: 'app-auth',
  imports: [ButtonComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  login(): void {
    const data: UserLoginDto = {
      email: 'teste@teste.com',
      password: 'teste123',
    };

    this.authService.login(data).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
