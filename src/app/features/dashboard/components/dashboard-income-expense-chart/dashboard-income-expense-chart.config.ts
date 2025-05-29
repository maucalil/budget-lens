import { ChartConfiguration, ChartType, TooltipItem } from 'chart.js';

function formatTooltipLabel(context: TooltipItem<'line'>): string {
  const label = context.dataset.label || '';
  const value = context.parsed.y;
  return `${label}: R$ ${value}`;
}

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
          boxWidth: 12,
          boxHeight: 12,
          font: {
            family: 'Poppins',
            size: 15,
          },
          color: '#f5f5f5',
        },
      },
      tooltip: {
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 14,
        },
        callbacks: {
          label: formatTooltipLabel,
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
