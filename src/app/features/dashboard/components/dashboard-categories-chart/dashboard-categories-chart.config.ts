import { ChartConfiguration, ChartType, TooltipItem } from 'chart.js';

function formatTooltipLabel(context: TooltipItem<'doughnut'>): string {
  const dataset = context.dataset;
  const rawData = dataset.data as unknown[];
  const data = rawData.map(val =>
    typeof val === 'number' ? val : Number(val)
  );
  const total = data.reduce((sum, val) => sum + val, 0);
  const value =
    typeof context.raw === 'number' ? context.raw : Number(context.raw);

  const percentage = total ? ((value / total) * 100).toFixed(1) : '0';
  return `${percentage}% (${value})`;
}

export const DASHBOARD_CATEGORIES_CHART_TYPE: ChartType = 'doughnut';

export const DASHBOARD_CATEGORIES_CHART_OPTIONS: ChartConfiguration['options'] =
  {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      arc: {
        borderColor: 'transparent',
        hoverOffset: 4,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: true,
          boxWidth: 12,
          boxHeight: 12,
          padding: 25,
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
        ticks: { display: false },
      },
      y: {
        grace: '5%',
        border: { display: false },
        grid: { display: false },
        ticks: { display: false },
      },
    },
  };
