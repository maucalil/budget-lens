import { Component, inject, OnInit, signal } from '@angular/core';
import { WalletAccountComponent } from './components/wallet-account/wallet-account.component';
import { Account, AccountCreateDto, AccountUpdateDto } from '@core/models';
import { ButtonComponent } from '@shared/components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '@core/services';
import { EmptyStateComponent } from '@shared/components';

@Component({
  selector: 'app-wallet',
  imports: [WalletAccountComponent, ButtonComponent, EmptyStateComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss',
})
export class WalletComponent implements OnInit {
  accounts = signal<(Account | null)[]>([]);
  isLoading = signal(true);
  isAdding = signal(false);

  faPlus = faPlus;

  private accountService = inject(AccountService);

  ngOnInit(): void {
    this.loadAccounts();
  }

  onAdd(): void {
    if (this.isAdding()) return;
    this.accounts.update(accounts => [null, ...accounts]);
    this.isAdding.set(true);
  }

  onAccountClosed(): void {
    this.isAdding.set(false);
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
    this.isAdding.set(false);
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

  get isEmpty(): boolean {
    return this.accounts().length === 0 && !this.isAdding();
  }
}
