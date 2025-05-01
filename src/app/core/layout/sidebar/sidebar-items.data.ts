import { SidebarItem } from './sidebar-item.interface';

export const sidebarItems: SidebarItem[] = [
  {
    link: '',
    icon: 'fa-house-user', // chart-line
    label: 'Dashboard',
  },
  {
    link: '/contas',
    icon: 'fa-credit-card',
    label: 'Contas',
  },
  {
    link: '/transacoes',
    icon: 'fa-money-bill-wave', // money-check-dollar
    label: 'Transacoes',
  },
];
