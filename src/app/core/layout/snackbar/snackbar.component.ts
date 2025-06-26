import { NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { SnackbarService } from '@core/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components';

@Component({
  selector: 'app-snackbar',
  imports: [ButtonComponent, NgClass, FontAwesomeModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {
  private readonly snackbarService = inject(SnackbarService);

  readonly state = computed(() => this.snackbarService.state());

  faXmark = faXmark;

  close(): void {
    this.snackbarService.close();
  }
}
