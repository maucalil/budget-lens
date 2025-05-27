import { Component } from '@angular/core';
import { DashboardCashCardComponent } from './components/dashboard-cash-card/dashboard-cash-card.component';
import { DashboardTransactionTableComponent } from './components/dashboard-transaction-table/dashboard-transaction-table.component';
import { DashboardCashCardData } from '@models/dashboard-cash-card-data.interface';
import { DashboardTableRowData } from '@models/dashboard-table-row-data.interface';
import {
  MOCK_CASH_CARD_DATA,
  MOCK_DASHBOARD_TRANSACTIONS,
} from '@shared/mocks/dashboard.mock';
import { DashboardIncomeExpenseChartComponent } from './components/dashboard-income-expense-chart/dashboard-income-expense-chart.component';
import { DashboardCategoriesChartComponent } from './components/dashboard-categories-chart/dashboard-categories-chart.component';
import { SelectorComponent } from '@shared/components/selector/selector.component';
import { FilterYearMonthService } from '@core/services';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardCashCardComponent,
    DashboardCategoriesChartComponent,
    DashboardIncomeExpenseChartComponent,
    DashboardTransactionTableComponent,
    SelectorComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cashCardData: DashboardCashCardData[] = MOCK_CASH_CARD_DATA;
  transactions: DashboardTableRowData[] = MOCK_DASHBOARD_TRANSACTIONS;

  years: string[];
  currentYear: string;
  selectedYear: string;

  months: string[];
  currentMonth: string;
  selectedMonth: string;

  constructor(private filterYearMonthService: FilterYearMonthService) {
    this.currentYear = this.filterYearMonthService.getCurrentYear();
    this.selectedYear = this.currentYear;

    this.currentMonth = this.filterYearMonthService.getCurrentMonth();
    this.selectedMonth = this.currentMonth;

    this.years = this.filterYearMonthService.getYears(2023);
    this.months = this.filterYearMonthService.getFilteredMonths(
      this.selectedYear
    );
  }

  onYearChange(year: string) {
    this.selectedYear = year;
    this.months = this.filterYearMonthService.getFilteredMonths(
      this.selectedYear
    );

    this.selectedMonth =
      this.selectedYear === this.currentYear
        ? this.currentMonth
        : this.months[0];
  }

  onMonthChange(mes: string) {
    this.selectedMonth = mes;
  }
}
