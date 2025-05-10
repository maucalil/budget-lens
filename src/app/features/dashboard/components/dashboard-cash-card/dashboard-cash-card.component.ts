import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '@shared/components';
import { DashboardCashCardData } from 'src/app/models/dashboard-cash-card-data.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-dashboard-cash-card',
  imports: [CommonModule, CardComponent, FontAwesomeModule],
  templateUrl: './dashboard-cash-card.component.html',
  styleUrl: './dashboard-cash-card.component.scss',
})
export class DashboardCashCardComponent {
  @Input() data!: DashboardCashCardData;
}
