import { Chart, ChartConfiguration, ChartType, TooltipItem } from 'chart.js';

const LEGEND_POSITION_SWITCH_WIDTH = 615;
const LEGEND_VISIBILITY_SWITCH_WIDTH = 358;

function onChartResize(chart: Chart, size: { width: number; height: number }) {
  const chartWidth = size.width;
  const legendOptions = chart.options.plugins!.legend!;

  const shouldShowLegend = chartWidth >= LEGEND_VISIBILITY_SWITCH_WIDTH;
  const preferredPosition =
    chartWidth < LEGEND_POSITION_SWITCH_WIDTH ? 'bottom' : 'left';

  const isDisplayChanged = legendOptions.display !== shouldShowLegend;
  const isPositionChanged = legendOptions.position !== preferredPosition;

  if (!isDisplayChanged && !isPositionChanged) return;

  legendOptions.display = shouldShowLegend;
  legendOptions.position = preferredPosition;
  chart.update();
}

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
    onResize: onChartResize,
    elements: {
      arc: {
        borderColor: 'transparent',
      },
    },
    plugins: {
      legend: {
        position: 'left',
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
