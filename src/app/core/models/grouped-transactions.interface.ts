// groupedTransaction.interface.ts
import { Transaction } from './transaction.interface';

interface GroupedTransactions {
  totalAmount: number;
  transactions: Transaction[];
}

export interface GroupedTransactionsByDate extends GroupedTransactions {
  date: Date;
}
