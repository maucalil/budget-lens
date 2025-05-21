import { Component } from '@angular/core';
import { CardComponent } from '@shared/components';
import {
  DASHBOARD_INCOME_EXPENSES_CHART_DATA,
  DASHBOARD_INCOME_EXPENSES_CHART_OPTIONS,
  DASHBOARD_INCOME_EXPENSES_CHART_TYPE,
} from '@shared/mocks/dashboard.mock';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-income-expense-chart',
  imports: [BaseChartDirective, CardComponent],
  templateUrl: './dashboard-income-expense-chart.component.html',
  styleUrl: './dashboard-income-expense-chart.component.scss',
})
export class DashboardIncomeExpenseChartComponent {
  public lineChartData: ChartConfiguration['data'] =
    DASHBOARD_INCOME_EXPENSES_CHART_DATA;

  public lineChartOptions: ChartConfiguration['options'] =
    DASHBOARD_INCOME_EXPENSES_CHART_OPTIONS;

  public lineChartType: ChartType = DASHBOARD_INCOME_EXPENSES_CHART_TYPE;
}
