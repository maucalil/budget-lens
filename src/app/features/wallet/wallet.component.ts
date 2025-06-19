import { Component, inject, OnInit, signal } from '@angular/core';
import { WalletAccountComponent } from './components/wallet-account/wallet-account.component';
import { Account, AccountCreateDto, AccountUpdateDto } from '@core/models';
import { ButtonComponent } from '@shared/components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '@core/services';

@Component({
  selector: 'app-wallet',
  imports: [WalletAccountComponent, ButtonComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss',
})
export class WalletComponent implements OnInit {
  accounts = signal<(Account | null)[]>([]);

  faPlus = faPlus;

  private accountService = inject(AccountService);

  ngOnInit(): void {
    this.loadAccounts();
  }

  onAdd(): void {
    this.accounts.update(accounts => [null, ...accounts]);
  }

  onAccountClosed(): void {
    if (this.accounts().length && this.accounts()[0] === null) {
      this.accounts.update(accounts => accounts.slice(1));
    }
  }

  onAccountDeleted(accountId: number) {
    this.accountService.delete(accountId).subscribe({
      next: () => this.loadAccounts(),
    });
  }

  onAccountSubmitted(dto: AccountCreateDto | AccountUpdateDto): void {
    const [first, ...existingAccounts] = this.accounts();

    if (first === null) {
      this.accountService.create(dto as AccountCreateDto).subscribe({
        next: created => this.accounts.set([created, ...existingAccounts]),
        error: () => {
          this.accounts.set(existingAccounts);
        },
      });
      return;
    }

    if (!first) return;

    this.accountService.update(first.id, dto as AccountUpdateDto).subscribe({
      next: updated => this.accounts.set([updated, ...existingAccounts]),
    });
  }

  private loadAccounts(): void {
    this.accountService.getAll().subscribe({
      next: data => {
        this.accounts.set(data);
      },
    });
  }
}
