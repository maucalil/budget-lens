import { Component, inject } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from '@core/services';
import { SpinnerComponent } from '@shared/components';
import { AsyncPipe } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Component({
  selector: 'app-layout',
  imports: [
    SnackbarComponent,
    SpinnerComponent,
    SidebarComponent,
    RouterOutlet,
    AsyncPipe,
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  loading$ = inject(LoaderService).loading$;
}
