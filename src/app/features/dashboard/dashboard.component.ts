import { Component } from '@angular/core';
import { DashboardCashCardComponent } from './components/dashboard-cash-card/dashboard-cash-card.component';
import { DashboardTransactionTableComponent } from './components/dashboard-transaction-table/dashboard-transaction-table.component';
import { DashboardCashCardData } from '@models/dashboard-cash-card-data.interface';
import { CardComponent } from '@shared/components';
import { DashboardTableRowData } from '@models/dashboard-table-row-data.interface';
import {
  MOCK_CASH_CARD_DATA,
  MOCK_DASHBOARD_TRANSACTIONS,
} from '@shared/mocks/dashboard.mock';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardCashCardComponent,
    CardComponent,
    DashboardTransactionTableComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cashCardData: DashboardCashCardData[] = MOCK_CASH_CARD_DATA;
  transactions: DashboardTableRowData[] = MOCK_DASHBOARD_TRANSACTIONS;
}
