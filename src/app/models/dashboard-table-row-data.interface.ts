import { Account } from './account.interface';
import { Category } from './category.interface';
import { Currency } from './enum/currency.enum';
import { PaymentMethod } from './enum/payment-method.enum';

export interface DashboardTableRowData {
  isIncome: boolean;
  name: string;
  date: string;
  amount: number;
  account: Account;
  category: Category;
  paymentMethod: PaymentMethod;
  currency: Currency;
}
