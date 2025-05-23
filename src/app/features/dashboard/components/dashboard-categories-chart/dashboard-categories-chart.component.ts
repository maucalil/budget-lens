import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import {
  DASHBOARD_CATEGORIES_CHART_OPTIONS,
  DASHBOARD_CATEGORIES_CHART_TYPE,
} from './dashboard-categories-chart.config';
import { CardComponent } from '@shared/components';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-categories-chart',
  imports: [BaseChartDirective, CardComponent],
  templateUrl: './dashboard-categories-chart.component.html',
  styleUrl: './dashboard-categories-chart.component.scss',
})
export class DashboardCategoriesChartComponent {
  chartData: ChartConfiguration['data'] = {
    labels: [
      'Alimentação',
      'Moradia',
      'Transporte',
      'Entreterimento',
      'Saúde',
      'Investimentos',
    ],
    datasets: [
      {
        data: [450, 800, 300, 200, 150, 950],
        backgroundColor: [
          'rgba(255, 107, 107, 0.7)',
          'rgba(254, 202, 87, 0.7)',
          'rgba(84, 160, 255, 0.7)',
          'rgba(29, 209, 161, 0.7)',
          'rgba(255, 159, 243, 0.7)',
          'rgba(72, 219, 251, 0.7)',
          'rgba(0, 210, 211, 0.7)',
          'rgba(200, 214, 229, 0.7)',
        ],
        borderColor: [
          'rgba(255, 107, 107, 0.9)',
          'rgba(254, 202, 87, 0.9)',
          'rgba(84, 160, 255, 0.9)',
          'rgba(29, 209, 161, 0.9)',
          'rgba(255, 159, 243, 0.9)',
          'rgba(72, 219, 251, 0.9)',
          'rgba(0, 210, 211, 0.9)',
          'rgba(200, 214, 229, 0.9)',
        ],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  chartOptions: ChartConfiguration['options'] =
    DASHBOARD_CATEGORIES_CHART_OPTIONS;

  chartType: ChartType = DASHBOARD_CATEGORIES_CHART_TYPE;
}
