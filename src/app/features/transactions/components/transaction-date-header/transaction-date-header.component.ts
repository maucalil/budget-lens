import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-date-header',
  imports: [DatePipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './transaction-date-header.component.html',
  styleUrl: './transaction-date-header.component.scss',
})
export class TransactionDateHeaderComponent {
  @Input({ required: true }) date!: Date;
  @Input({ required: true }) totalAmount!: number;
}
