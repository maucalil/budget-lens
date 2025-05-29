import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '@core/models';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { BadgeComponent } from '@shared/components';

@Component({
  selector: 'app-transaction-item',
  imports: [BadgeComponent, FontAwesomeModule, NgClass, CurrencyPipe],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.scss',
})
export class TransactionItemComponent {
  @Input({ required: true }) transaction!: Transaction;
  @Output() selected = new EventEmitter<Transaction>();

  faArrowTrendUp = faArrowTrendUp;
  faArrowTrendDown = faArrowTrendDown;

  onSelection() {
    this.selected.emit(this.transaction);
  }
}
