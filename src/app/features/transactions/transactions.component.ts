import { Component } from '@angular/core';
import { TransactionsHeaderComponent } from './components/transactions-header/transactions-header.component';

@Component({
  selector: 'app-transactions',
  imports: [TransactionsHeaderComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  openAddPanel() {
    console.log('Open Add Panel'); // TODO
  }

  openFilterPanel() {
    console.log('Open Filter Panel'); // TODO
  }
}
