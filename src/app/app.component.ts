import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '@core/layout/sidebar/sidebar.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'budget-lens';
}
