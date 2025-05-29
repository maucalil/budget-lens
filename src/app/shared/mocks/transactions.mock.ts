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
        account: { name: 'Nubank', color: '#820AD1' },
        paymentMethod: PaymentMethod.CREDIT_CARD,
      },
      {
        id: 2,
        name: 'Salário',
        amount: 500,
        currency: Currency.BRL,
        date: '2025-05-28',
        isIncome: true,
        category: { name: 'Benefícios', color: '#409a3c' },
        account: { name: 'Itaú', color: '#FF6200' },
        paymentMethod: PaymentMethod.BANK_TRANSFER,
      },
      {
        id: 3,
        name: 'Netflix',
        amount: 100,
        currency: Currency.BRL,
        date: '2025-05-28',
        isIncome: false,
        category: { name: 'Entreterimento', color: 'orange' },
        account: { name: 'Nubank', color: '#820AD1' },
        paymentMethod: PaymentMethod.DEBIT_CARD,
      },
    ],
  },
  {
    date: new Date('2025-05-27'),
    totalAmount: 220.0,
    transactions: [
      {
        id: 4,
        name: 'Almoço',
        amount: 40,
        currency: Currency.BRL,
        date: '2025-05-27',
        isIncome: false,
        category: { name: 'Alimentação', color: '#ea1d2c' },
        account: { name: 'Caixa', color: '#005CA9' },
        paymentMethod: PaymentMethod.CASH,
      },
      {
        id: 5,
        name: 'Uber',
        amount: 180,
        currency: Currency.BRL,
        date: '2025-05-27',
        isIncome: true,
        category: { name: 'Transporte', color: 'green' },
        account: { name: 'Caixa', color: '#005CA9' },
        paymentMethod: PaymentMethod.BANK_TRANSFER,
      },
    ],
  },
  {
    date: new Date('2025-05-27'),
    totalAmount: 220.0,
    transactions: [
      {
        id: 4,
        name: 'Almoço',
        amount: 40,
        currency: Currency.BRL,
        date: '2025-05-27',
        isIncome: false,
        category: { name: 'Alimentação', color: '#ea1d2c' },
        account: { name: 'Caixa', color: '#005CA9' },
        paymentMethod: PaymentMethod.CASH,
      },
      {
        id: 5,
        name: 'Uber',
        amount: 180,
        currency: Currency.BRL,
        date: '2025-05-27',
        isIncome: true,
        category: { name: 'Transporte', color: 'green' },
        account: { name: 'Caixa', color: '#005CA9' },
        paymentMethod: PaymentMethod.BANK_TRANSFER,
      },
    ],
  },
  {
    date: new Date('2025-05-27'),
    totalAmount: 220.0,
    transactions: [
      {
        id: 4,
        name: 'Almoço',
        amount: 40,
        currency: Currency.BRL,
        date: '2025-05-27',
        isIncome: false,
        category: { name: 'Alimentação', color: '#ea1d2c' },
        account: { name: 'Caixa', color: '#005CA9' },
        paymentMethod: PaymentMethod.CASH,
      },
      {
        id: 5,
        name: 'Uber',
        amount: 180,
        currency: Currency.BRL,
        date: '2025-05-27',
        isIncome: true,
        category: { name: 'Transporte', color: 'green' },
        account: { name: 'Caixa', color: '#005CA9' },
        paymentMethod: PaymentMethod.BANK_TRANSFER,
      },
    ],
  },
  {
    date: new Date('2025-05-27'),
    totalAmount: 220.0,
    transactions: [
      {
        id: 4,
        name: 'Almoço',
        amount: 40,
        currency: Currency.BRL,
        date: '2025-05-27',
        isIncome: false,
        category: { name: 'Alimentação', color: '#ea1d2c' },
        account: { name: 'Caixa', color: '#005CA9' },
        paymentMethod: PaymentMethod.CASH,
      },
      {
        id: 5,
        name: 'Uber',
        amount: 180,
        currency: Currency.BRL,
        date: '2025-05-27',
        isIncome: true,
        category: { name: 'Transporte', color: 'green' },
        account: { name: 'Caixa', color: '#005CA9' },
        paymentMethod: PaymentMethod.BANK_TRANSFER,
      },
    ],
  },
];
