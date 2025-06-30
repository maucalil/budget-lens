import { Component, inject, OnInit, signal } from '@angular/core';
import { DashboardCashCardComponent } from './components/dashboard-cash-card/dashboard-cash-card.component';
import { DashboardTransactionTableComponent } from './components/dashboard-transaction-table/dashboard-transaction-table.component';
import { DashboardIncomeExpenseChartComponent } from './components/dashboard-income-expense-chart/dashboard-income-expense-chart.component';
import { DashboardCategoriesChartComponent } from './components/dashboard-categories-chart/dashboard-categories-chart.component';
import { SelectorComponent } from '@shared/components/selector/selector.component';
import { FilterYearMonthService, TransactionService } from '@core/services';
import { DashboardCashCardData } from './models/dashboard-cash-card-data.interface';
import { AnalyticsService } from '@core/services/analytics.service';
import { Currency } from '@shared/enums';
import {
  faBalanceScale,
  faArrowTrendUp,
  faArrowTrendDown,
} from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';
import { Transaction } from '@core/models';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardCashCardComponent,
    DashboardCategoriesChartComponent,
    DashboardIncomeExpenseChartComponent,
    DashboardTransactionTableComponent,
    SelectorComponent,
  ],
  providers: [DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private analyticsService = inject(AnalyticsService);
  private transactionService = inject(TransactionService);
  private datePipe = inject(DatePipe);

  isLoading = signal(true);

  cashCardData: DashboardCashCardData[] = [];
  transactions: Transaction[] = [];

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

  ngOnInit(): void {
    this.getCashFlow();
    this.getTransactions();
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

    this.getCashFlow();
    this.getTransactions();
  }

  onMonthChange(mes: string) {
    this.selectedMonth = mes;
    this.getCashFlow();
    this.getTransactions();
  }

  private getCashFlow(): void {
    this.isLoading.set(true);
    this.analyticsService
      .getCashFlow({
        month: this.monthNameToNumber(this.selectedMonth),
        year: this.selectedYear,
      })
      .subscribe({
        next: data => {
          this.cashCardData = [
            {
              amount: data.balance,
              currency: Currency.BRL,
              name: 'Balanço Total',
              icon: faBalanceScale,
            },
            {
              amount: data.income,
              currency: Currency.BRL,
              name: 'Ganhos Totais',
              icon: faArrowTrendUp,
            },
            {
              amount: data.expense,
              currency: Currency.BRL,
              name: 'Gastos Totais',
              icon: faArrowTrendDown,
            },
          ];
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        },
      });
  }

  private getTransactions(): void {
    this.isLoading.set(true);
    this.transactionService
      .getAll({
        month: this.monthNameToNumber(this.selectedMonth),
        year: Number(this.selectedYear),
        maxResults: 5,
      })
      .subscribe({
        next: data => {
          this.transactions = data.map(transaction => {
            const formattedDate =
              this.datePipe.transform(transaction.date, 'dd/MM/yyyy', 'UTC') ??
              '';

            return {
              id: transaction.id,
              name: transaction.name,
              amount: transaction.amount,
              date: formattedDate,
              type: transaction.type,
              paymentMethod: transaction.paymentMethod,
              account: transaction.account,
              category: transaction.category,
            };
          });
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        },
      });
  }

  monthNameToNumber(monthName: string): number {
    const monthsMap: Record<string, number> = {
      Jan: 1,
      Fev: 2,
      Mar: 3,
      Abr: 4,
      Mai: 5,
      Jun: 6,
      Jul: 7,
      Ago: 8,
      Set: 9,
      Out: 10,
      Nov: 11,
      Dez: 12,
    };
    return monthsMap[monthName] || 0;
  }
}
