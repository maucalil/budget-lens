import { Component } from '@angular/core';
import {
  faBalanceScale,
  faMoneyBillTrendUp,
  faMoneyBillWave,
  faDownLong,
} from '@fortawesome/free-solid-svg-icons';
import { DashboardCashCardComponent } from './components/dashboard-cash-card/dashboard-cash-card.component';
import { DashboardCashCardData } from 'src/app/models/dashboard-cash-card-data.interface';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCashCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cashCardData: DashboardCashCardData[] = [
    {
      value: 5000,
      currency: 'BRL',
      name: 'Total Balance',
      icon: faBalanceScale,
    },
    {
      value: 500000,
      currency: 'EUR',
      name: 'Total Earnings',
      icon: faMoneyBillTrendUp,
    },
    {
      value: 3000,
      currency: 'USD',
      name: 'Total Spending',
      icon: faDownLong,
    },
    {
      value: 100,
      currency: 'GBP',
      name: 'Budget',
      icon: faMoneyBillWave,
    },
  ];
}
