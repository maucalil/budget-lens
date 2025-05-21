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
import { ChartConfiguration, ChartType } from 'chart.js';

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

export const DASHBOARD_INCOME_EXPENSES_CHART_TYPE: ChartType = 'line';

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
        label: 'Income',
        borderColor: '#66bb6a',
        backgroundColor: '#66bb6a',
      },
      {
        data: [800, 1250, 1000, 600, 850, 500, 480, 300, 420, 500, 1500, 1000],
        label: 'Expenses',
        borderColor: '#ef5350',
        backgroundColor: '#ef5350',
      },
    ],
  };

export const DASHBOARD_INCOME_EXPENSES_CHART_OPTIONS: ChartConfiguration['options'] =
  {
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 4,
        hoverRadius: 5,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          label: context => {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: R$ ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        border: { display: false },
        grid: { display: false },
      },
      y: {
        grace: '5%',
        border: { display: false },
        grid: { display: false },
        ticks: { display: false },
      },
    },
  };
