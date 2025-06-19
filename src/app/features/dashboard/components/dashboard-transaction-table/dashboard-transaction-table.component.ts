import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '@shared/components';
import { paymentMethodLabels, TransactionType } from '@shared/enums';
import { EnumLabelPipe } from '@shared/pipes';
import { Transaction } from '@core/models';
import { EmptyStateComponent } from '@shared/components';

@Component({
  selector: 'app-dashboard-transaction-table',
  imports: [
    CommonModule,
    BadgeComponent,
    CardComponent,
    FontAwesomeModule,
    EnumLabelPipe,
    EmptyStateComponent,
  ],
  templateUrl: './dashboard-transaction-table.component.html',
  styleUrl: './dashboard-transaction-table.component.scss',
})
export class DashboardTransactionTableComponent {
  readonly paymentMethodLabels = paymentMethodLabels;

  transactionType = TransactionType;
  iconIncome = faArrowTrendUp;
  iconExpense = faArrowTrendDown;

  @Input() rows: Transaction[] = [];

  get isEmpty(): boolean {
    return this.rows.length === 0;
  }
}
