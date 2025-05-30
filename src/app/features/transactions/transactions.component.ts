import { Component } from '@angular/core';
import { TransactionsHeaderComponent } from './components/transactions-header/transactions-header.component';
import { TransactionDateHeaderComponent } from './components/transaction-date-header/transaction-date-header.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { GroupedTransactionsByDate, Transaction } from '@core/models';
import { MOCK_GROUPED_TRANSACTIONS } from '@shared/mocks/transactions.mock';

@Component({
  selector: 'app-transactions',
  imports: [
    TransactionDateHeaderComponent,
    TransactionsHeaderComponent,
    TransactionItemComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  groupedTransactions: GroupedTransactionsByDate[] = MOCK_GROUPED_TRANSACTIONS;

  openAddPanel() {
    console.log('Open Add Panel'); // TODO
  }

  openFilterPanel() {
    console.log('Open Filter Panel'); // TODO
  }

  onTransactionSelected(transaction: Transaction) {
    console.log(transaction); // TODO
  }
}
