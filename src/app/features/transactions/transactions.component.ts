import { Component } from '@angular/core';
import { TransactionsHeaderComponent } from './components/transactions-header/transactions-header.component';
import { TransactionDateHeaderComponent } from './components/transaction-date-header/transaction-date-header.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import {
  GroupedTransactionsByDate,
  Transaction,
  TransactionCreateDto,
  TransactionUpdateDto,
} from '@core/models';
import { TransactionEditorComponent } from './components/transaction-editor/transaction-editor.component';

@Component({
  selector: 'app-transactions',
  imports: [
    TransactionDateHeaderComponent,
    TransactionEditorComponent,
    TransactionsHeaderComponent,
    TransactionItemComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  groupedTransactions: GroupedTransactionsByDate[] = [];
  selectedTransaction: Transaction | null = null;
  isTransactionEditorOpen = false;

  openTransactionEditor() {
    this.isTransactionEditorOpen = true;
    this.selectedTransaction = null;
  }

  closeTransactionEditor() {
    this.isTransactionEditorOpen = false;
    this.selectedTransaction = null;
  }

  onTransactionSelected(transaction: Transaction) {
    this.isTransactionEditorOpen = true;
    this.selectedTransaction = transaction;
  }

  openFilterPanel() {
    console.log('Open Filter Panel'); // TODO
  }

  onTransactionSubmission(
    transaction: TransactionCreateDto | TransactionUpdateDto
  ) {
    console.log(transaction); // TODO
  }
}
