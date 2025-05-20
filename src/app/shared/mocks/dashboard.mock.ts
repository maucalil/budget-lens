import {
  faBalanceScale,
  faMoneyBillTrendUp,
  faDownLong,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';
import {
  Currency,
  DashboardCashCardData,
  DashboardTableRowData,
  PaymentMethod,
} from '@models/index';

export const MOCK_CASH_CARD_DATA: DashboardCashCardData[] = [
  {
    amount: 5000,
    currency: Currency.BRL,
    name: 'Total Balance',
    icon: faBalanceScale,
  },
  {
    amount: 500000,
    currency: Currency.USD,
    name: 'Total Earnings',
    icon: faMoneyBillTrendUp,
  },
  {
    amount: 3000,
    currency: Currency.EUR,
    name: 'Total Spending',
    icon: faDownLong,
  },
  {
    amount: 100,
    currency: Currency.GBP,
    name: 'Budget',
    icon: faMoneyBillWave,
  },
];

export const MOCK_DASHBOARD_TRANSACTIONS: DashboardTableRowData[] = [
  {
    isIncome: false,
    name: 'Compra no Mercado',
    date: '2025-05-01',
    amount: 150.75,
    account: { name: 'Banco do Brasil', color: '#5A85A9' },
    category: { name: 'Supermercado', color: '#A79AFF' },
    paymentMethod: PaymentMethod.CREDIT_CARD,
    currency: Currency.BRL,
  },
  {
    isIncome: true,
    name: 'Salário',
    date: '2025-05-05',
    amount: 5000.0,
    account: { name: 'Nubank', color: '#5A85A9' },
    category: { name: 'Salário', color: '#A79AFF' },
    paymentMethod: PaymentMethod.CREDIT_CARD,
    currency: Currency.BRL,
  },
  {
    isIncome: false,
    name: 'Assinatura Netflix',
    date: '2025-05-10',
    amount: 39.9,
    account: { name: 'Banco do Brasil', color: '#5A85A9' },
    category: { name: 'Streaming', color: '#A79AFF' },
    paymentMethod: PaymentMethod.CREDIT_CARD,
    currency: Currency.BRL,
  },
  {
    isIncome: false,
    name: 'Aluguel',
    date: '2025-05-01',
    amount: 1200.0,
    account: { name: 'Banco do Brasil', color: '#5A85A9' },
    category: { name: 'Casa', color: '#A79AFF' },
    paymentMethod: PaymentMethod.CREDIT_CARD,
    currency: Currency.BRL,
  },
  {
    isIncome: false,
    name: 'Uber',
    date: '2025-05-12',
    amount: 23.5,
    account: { name: 'Nubank', color: '#5A85A9' },
    category: { name: 'Transporte', color: '#A79AFF' },
    paymentMethod: PaymentMethod.CREDIT_CARD,
    currency: Currency.BRL,
  },
];
