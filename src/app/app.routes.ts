import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        m => m.DashboardComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'contas',
    loadComponent: () =>
      import('./features/wallet/wallet.component').then(m => m.WalletComponent),
  },
  {
    path: 'transacoes',
    loadComponent: () =>
      import('./features/transactions/transactions.component').then(
        m => m.TransactionsComponent
      ),
  },
];
