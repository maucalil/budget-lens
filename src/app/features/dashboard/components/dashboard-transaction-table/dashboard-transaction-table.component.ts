import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '@shared/components';
import { DashboardTableRowData } from '@features/dashboard/models/dashboard-table-row-data.interface';

@Component({
  selector: 'app-dashboard-transaction-table',
  imports: [CommonModule, BadgeComponent, CardComponent, FontAwesomeModule],
  templateUrl: './dashboard-transaction-table.component.html',
  styleUrl: './dashboard-transaction-table.component.scss',
})
export class DashboardTransactionTableComponent {
  iconIncome = faArrowTrendUp;
  iconExpense = faArrowTrendDown;

  @Input() rows: DashboardTableRowData[] = [];
}
