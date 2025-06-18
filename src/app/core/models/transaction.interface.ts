import { PaymentMethod, TransactionType } from '@shared/enums';
import { Account } from './account.interface';
import { Category } from './category.interface';

export interface Transaction {
  id: number;
  name: string;
  amount: number;
  date: string;
  type: TransactionType;
  paymentMethod: PaymentMethod;
  account: Account;
  category: Category;
}

export interface TransactionFilter {
  month?: number;
  year?: number;
  maxResults?: number;
}

export type TransactionCreateDto = Omit<
  Transaction,
  'id' | 'account' | 'category'
> & {
  accountId: number;
  categoryId: number;
};
export type TransactionUpdateDto = Partial<TransactionCreateDto>;
