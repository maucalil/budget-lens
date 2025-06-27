import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import {
  DASHBOARD_CATEGORIES_CHART_OPTIONS,
  DASHBOARD_CATEGORIES_CHART_TYPE,
} from './dashboard-categories-chart.config';
import { CardComponent } from '@shared/components';
import { BaseChartDirective } from 'ng2-charts';
import { AnalyticsService } from '@core/services/analytics.service';
import { EmptyStateComponent } from '@shared/components';

@Component({
  selector: 'app-dashboard-categories-chart',
  imports: [BaseChartDirective, CardComponent, EmptyStateComponent],
  templateUrl: './dashboard-categories-chart.component.html',
  styleUrl: './dashboard-categories-chart.component.scss',
})
export class DashboardCategoriesChartComponent implements OnInit, OnChanges {
  @Input() month: string | number = new Date().getMonth() + 1;
  @Input() year: string | number = new Date().getFullYear();

  private analyticsService = inject(AnalyticsService);
  isLoading = signal(true);

  chartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [],
  };

  chartOptions: ChartConfiguration['options'] =
    DASHBOARD_CATEGORIES_CHART_OPTIONS;

  chartType: ChartType = DASHBOARD_CATEGORIES_CHART_TYPE;

  ngOnInit(): void {
    this.getExpensesByCategory();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['month'] || changes['year']) {
      this.getExpensesByCategory();
    }
  }

  private getExpensesByCategory(): void {
    this.isLoading.set(true);
    this.analyticsService
      .getExpensesByCategory({
        month: this.month,
        year: this.year,
      })
      .subscribe({
        next: data => {
          this.chartData = {
            labels: data.labels,
            datasets: [
              {
                data: data.datasets[0].data,
                backgroundColor: data.datasets[0].backgroundColor,
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

  get isEmpty(): boolean {
    return (
      !this.chartData ||
      this.chartData.datasets.length === 0 ||
      !this.chartData.datasets[0].data.length
    );
  }
}
