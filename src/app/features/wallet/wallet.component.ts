import { Component } from '@angular/core';
import { WalletAccountCardComponent } from './components/wallet-account-card/wallet-account-card.component';

@Component({
  selector: 'app-wallet',
  imports: [WalletAccountCardComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss',
})
export class WalletComponent {}
