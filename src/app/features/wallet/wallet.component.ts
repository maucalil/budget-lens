import { Component } from '@angular/core';
import { WalletAccountComponent } from './components/wallet-account/wallet-account.component';
import { Account } from '@core/models';
import { PaymentMethod } from '@shared/enums';
import { ButtonComponent } from '@shared/components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wallet',
  imports: [WalletAccountComponent, ButtonComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss',
})
export class WalletComponent {
  faPlus = faPlus;

  accounts: (Account | null)[] = [
    {
      name: 'Banco do Brasil',
      color: '#4CAF50',
      amount: 1200,
      budget: 2000,
      paymentMethods: [
        PaymentMethod.CASH,
        PaymentMethod.CREDIT_CARD,
        PaymentMethod.PIX,
      ],
    },
  ];

  onAdd() {
    this.accounts = [null, ...this.accounts];
  }

  onClosed() {
    if (this.accounts[0] === null) {
      this.accounts.shift();
    }
  }

  onSubmitted(account: Account) {
    this.accounts[0] = account;
  }
}
