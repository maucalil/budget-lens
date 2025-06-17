import {
  faLandmark,
  faMoneyCheckAlt,
  faSignOut,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from './sidebar-item.interface';

export const sidebarItems: SidebarItem[] = [
  {
    link: '/dashboard',
    icon: faLandmark,
    label: 'Dashboard',
  },
  {
    link: '/carteira',
    icon: faWallet,
    label: 'Carteira',
  },
  {
    link: '/transacoes',
    icon: faMoneyCheckAlt,
    label: 'Transações',
  },
];

export const sidebarFooterItems: SidebarItem[] = [
  {
    link: '/authenticate',
    icon: faSignOut,
    label: 'Logout',
  },
];
