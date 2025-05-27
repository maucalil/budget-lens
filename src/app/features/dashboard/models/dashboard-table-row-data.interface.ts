import { Account, Category } from '@core/models';
import { Currency, PaymentMethod } from '@shared/enums';

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
