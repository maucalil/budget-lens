import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardCashCardData } from '@models/dashboard-cash-card-data.interface';

@Component({
  selector: 'app-dashboard-cash-card',
  imports: [CommonModule, CardComponent, FontAwesomeModule],
  templateUrl: './dashboard-cash-card.component.html',
  styleUrl: './dashboard-cash-card.component.scss',
})
export class DashboardCashCardComponent {
  @Input() data!: DashboardCashCardData;
}
