import { DashboardCashCardData } from '@features/dashboard/models/dashboard-cash-card-data.interface';
import { DashboardTableRowData } from '@features/dashboard/models/dashboard-table-row-data.interface';
import {
  faBalanceScale,
  faArrowTrendUp,
  faArrowTrendDown,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';
import { Currency, PaymentMethod } from '@shared/enums';
import { ChartConfiguration } from 'chart.js';

export const MOCK_CASH_CARD_DATA: DashboardCashCardData[] = [
  {
    amount: 5000,
    currency: Currency.BRL,
    name: 'Saldo Total',
    icon: faBalanceScale,
  },
  {
    amount: 500000,
    currency: Currency.USD,
    name: 'Ganhos Totais',
    icon: faArrowTrendUp,
  },
  {
    amount: 3000,
    currency: Currency.EUR,
    name: 'Gastos Totais',
    icon: faArrowTrendDown,
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
    date: '01/05/2025',
    amount: 150.75,
    account: {
      id: 1,
      name: 'Banco do Brasil',
      color: '#5A85A9',
      amount: 2000,
      paymentMethods: [PaymentMethod.CREDIT_CARD],
    },
    category: { id: 1, name: 'Supermercado', color: '#A79AFF' },
    paymentMethod: PaymentMethod.CREDIT_CARD,
    currency: Currency.BRL,
  },
];

export const DASHBOARD_INCOME_EXPENSES_CHART_DATA: ChartConfiguration['data'] =
  {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    datasets: [
      {
        data: [400, 300, 600, 630, 580, 650, 900, 1050, 700, 1200, 830, 780],
        label: 'Ganhos',
        borderColor: '#66bb6a',
        backgroundColor: '#66bb6a',
      },
      {
        data: [800, 1250, 1000, 600, 850, 500, 480, 300, 420, 500, 1500, 1000],
        label: 'Gastos',
        borderColor: '#ef5350',
        backgroundColor: '#ef5350',
      },
    ],
  };
