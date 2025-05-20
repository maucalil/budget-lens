import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DashboardTableRowData } from '@models/dashboard-table-row-data.interface';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-transaction-table',
  imports: [CommonModule, BadgeComponent, FontAwesomeModule],
  templateUrl: './dashboard-transaction-table.component.html',
  styleUrl: './dashboard-transaction-table.component.scss',
})
export class DashboardTransactionTableComponent {
  iconIncome = faArrowTrendUp;
  iconExpense = faArrowTrendDown;

  @Input() rows: DashboardTableRowData[] = [];
}
