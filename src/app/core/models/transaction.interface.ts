import { Currency, PaymentMethod } from '@shared/enums';
import { Account } from './account.interface';
import { Category } from './category.interface';

export interface Transaction {
  account: Account;
  amount: number;
  category: Category;
  currency: Currency;
  date: string;
  isIncome: boolean;
  name: string;
  paymentMethod: PaymentMethod;
}
