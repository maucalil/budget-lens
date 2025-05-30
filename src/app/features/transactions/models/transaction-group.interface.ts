import { Transaction } from '@core/models';

export interface TransactionGroup {
  date: string;
  totalAmount: number;
  transactions: Transaction[];
}
