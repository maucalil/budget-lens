import { Component } from '@angular/core';
import { CardComponent } from '@shared/components';
import { DASHBOARD_INCOME_EXPENSES_CHART_DATA } from '@shared/mocks/dashboard.mock';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
  DASHBOARD_INCOME_EXPENSE_CHART_OPTIONS,
  DASHBOARD_INCOME_EXPENSE_CHART_TYPE,
} from './dashboard-income-expense-chart.config';

@Component({
  selector: 'app-dashboard-income-expense-chart',
  imports: [BaseChartDirective, CardComponent],
  templateUrl: './dashboard-income-expense-chart.component.html',
  styleUrl: './dashboard-income-expense-chart.component.scss',
})
export class DashboardIncomeExpenseChartComponent {
  chartData: ChartConfiguration['data'] = DASHBOARD_INCOME_EXPENSES_CHART_DATA;

  chartOptions: ChartConfiguration['options'] =
    DASHBOARD_INCOME_EXPENSE_CHART_OPTIONS;

  chartType: ChartType = DASHBOARD_INCOME_EXPENSE_CHART_TYPE;
}
