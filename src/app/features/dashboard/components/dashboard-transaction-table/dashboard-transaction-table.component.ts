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
import { paymentMethodLabels } from '@shared/enums';
import { EnumLabelPipe } from '@shared/pipes';

@Component({
  selector: 'app-dashboard-transaction-table',
  imports: [
    CommonModule,
    BadgeComponent,
    CardComponent,
    FontAwesomeModule,
    EnumLabelPipe,
  ],
  templateUrl: './dashboard-transaction-table.component.html',
  styleUrl: './dashboard-transaction-table.component.scss',
})
export class DashboardTransactionTableComponent {
  readonly paymentMethodLabels = paymentMethodLabels;

  iconIncome = faArrowTrendUp;
  iconExpense = faArrowTrendDown;

  @Input() rows: DashboardTableRowData[] = [];
}
