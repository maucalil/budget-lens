import { GroupedTransactionsByDate, Transaction } from '@core/models';
import { Currency, PaymentMethod } from '@shared/enums';

export interface TransactionGroup {
  date: string;
  totalAmount: number;
  transactions: Transaction[];
}

export const MOCK_GROUPED_TRANSACTIONS: GroupedTransactionsByDate[] = [
  {
    date: new Date('2025-05-28'),
    totalAmount: 350.0,
    transactions: [
      {
        id: 1,
        name: 'Compras no mercado',
        amount: 150,
        currency: Currency.BRL,
        date: '2025-05-28',
        isIncome: false,
        category: { name: 'Alimentação', color: '#ea1d2c' },
        account: {
          id: 1,
          name: 'Banco do Brasil',
          color: '#5A85A9',
          amount: 2000,
          paymentMethods: [PaymentMethod.CREDIT_CARD],
        },
        paymentMethod: PaymentMethod.CREDIT_CARD,
      },
    ],
  },
];
