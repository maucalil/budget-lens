import { ChartConfiguration, ChartType } from 'chart.js';

export const DASHBOARD_INCOME_EXPENSE_CHART_TYPE: ChartType = 'line';

export const DASHBOARD_INCOME_EXPENSE_CHART_OPTIONS: ChartConfiguration['options'] =
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
