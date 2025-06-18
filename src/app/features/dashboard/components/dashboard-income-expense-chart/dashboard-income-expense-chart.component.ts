import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { CardComponent } from '@shared/components';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
  DASHBOARD_INCOME_EXPENSE_CHART_OPTIONS,
  DASHBOARD_INCOME_EXPENSE_CHART_TYPE,
} from './dashboard-income-expense-chart.config';
import { AnalyticsService } from '@core/services/analytics.service';

@Component({
  selector: 'app-dashboard-income-expense-chart',
  imports: [BaseChartDirective, CardComponent],
  templateUrl: './dashboard-income-expense-chart.component.html',
  styleUrl: './dashboard-income-expense-chart.component.scss',
})
export class DashboardIncomeExpenseChartComponent implements OnInit, OnChanges {
  @Input() month: string | number = new Date().getMonth() + 1;
  @Input() year: string | number = new Date().getFullYear();

  private analyticsService = inject(AnalyticsService);
  isLoading = signal(true);

  chartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [],
  };

  chartOptions: ChartConfiguration['options'] =
    DASHBOARD_INCOME_EXPENSE_CHART_OPTIONS;

  chartType: ChartType = DASHBOARD_INCOME_EXPENSE_CHART_TYPE;

  ngOnInit(): void {
    this.getMonthlyIncomeExpense();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['month'] || changes['year']) {
      this.getMonthlyIncomeExpense();
    }
  }

  private getMonthlyIncomeExpense(): void {
    this.isLoading.set(true);
    this.analyticsService
      .getMonthlyIncomeExpense({
        month: this.month,
        year: this.year,
      })
      .subscribe({
        next: data => {
          this.chartData = {
            labels: data.labels,
            datasets: [
              {
                data: data.datasets[0].data.map(value => value || 0),
                label: 'Ganhos',
                borderColor: '#66bb6a',
                backgroundColor: '#66bb6a',
              },
              {
                data: data.datasets[1].data.map(value => value || 0),
                label: 'Gastos',
                borderColor: '#ef5350',
                backgroundColor: '#ef5350',
              },
            ],
          };
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        },
      });
  }
}
