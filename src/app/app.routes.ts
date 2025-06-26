import { Routes } from '@angular/router';
import { authGuard, publicGuard } from '@core/guards';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            m => m.DashboardComponent
          ),
      },
      {
        path: 'carteira',
        loadComponent: () =>
          import('./features/wallet/wallet.component').then(
            m => m.WalletComponent
          ),
      },
      {
        path: 'transacoes',
        loadComponent: () =>
          import('./features/transactions/transactions.component').then(
            m => m.TransactionsComponent
          ),
      },
    ],
  },
  {
    path: 'authenticate',
    canActivate: [publicGuard],
    loadComponent: () =>
      import('./features/auth/auth.component').then(m => m.AuthComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
