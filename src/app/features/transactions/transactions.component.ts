import { Component, inject, OnInit, signal } from '@angular/core';
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
import { TransactionService } from '@core/services';
import { EmptyStateComponent } from '@shared/components';
import { TransactionType } from '@shared/enums';

@Component({
  selector: 'app-transactions',
  imports: [
    TransactionDateHeaderComponent,
    TransactionEditorComponent,
    TransactionsHeaderComponent,
    TransactionItemComponent,
    EmptyStateComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  groupedTransactions = signal<GroupedTransactionsByDate[]>([]);
  selectedTransaction = signal<Transaction | null>(null);
  isTransactionEditorOpen = signal(false);
  isLoading = signal(true);

  private transactionService = inject(TransactionService);

  ngOnInit(): void {
    this.loadAndGroupTransactions();
  }

  openTransactionEditor() {
    this.isTransactionEditorOpen.set(true);
    this.selectedTransaction.set(null);
  }

  closeTransactionEditor() {
    this.isTransactionEditorOpen.set(false);
    this.selectedTransaction.set(null);
  }

  onTransactionSelected(transaction: Transaction) {
    this.isTransactionEditorOpen.set(true);
    this.selectedTransaction.set(transaction);
  }

  onTransactionDeleted(transactionId: number) {
    this.transactionService.delete(transactionId).subscribe({
      next: () => {
        this.loadAndGroupTransactions();
        this.closeTransactionEditor();
      },
    });
  }

  openFilterPanel() {
    console.log('Open Filter Panel'); // TODO
  }

  onTransactionSubmitted(
    transaction: TransactionCreateDto | TransactionUpdateDto
  ) {
    if (!this.selectedTransaction()) {
      this.transactionService
        .create(transaction as TransactionCreateDto)
        .subscribe({
          next: () => this.loadAndGroupTransactions(),
        });
      return;
    }

    this.transactionService
      .update(
        this.selectedTransaction()!.id,
        transaction as TransactionUpdateDto
      )
      .subscribe({
        next: () => this.loadAndGroupTransactions(),
      });
  }

  private loadAndGroupTransactions(): void {
    this.isLoading.set(true);
    this.transactionService.getAll().subscribe({
      next: data => {
        this.groupedTransactions.set(this.groupTransactionsByDate(data));
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }

  private groupTransactionsByDate(
    transactions: Transaction[]
  ): GroupedTransactionsByDate[] {
    const map = new Map<string, GroupedTransactionsByDate>();
    const result: GroupedTransactionsByDate[] = [];

    for (const transaction of transactions) {
      const dateKey = transaction.date.split('T')[0];

      let group = map.get(dateKey);
      if (!group) {
        const [year, month, day] = dateKey.split('-').map(Number);

        group = {
          date: new Date(year, month - 1, day),
          totalAmount: 0,
          transactions: [],
        };
        map.set(dateKey, group);
        result.push(group);
      }

      group.transactions.push(transaction);

      const amount = Number(transaction.amount);
      group.totalAmount +=
        transaction.type === TransactionType.EXPENSE ? -amount : amount;
    }

    return result;
  }

  get isEmpty(): boolean {
    return this.groupedTransactions().length === 0;
  }
}
