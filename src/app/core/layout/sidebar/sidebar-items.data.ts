import { faCreditCard, faLandmark, faMoneyCheckAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from './sidebar-item.interface';

export const sidebarItems: SidebarItem[] = [
  {
    link: '',
    icon: faLandmark, // chart-line
    label: 'Dashboard',
  },
  {
    link: '/contas',
    icon: faWallet,
    label: 'Carteira',
  },
  {
    link: '/transacoes',
    icon: faMoneyCheckAlt, // money-check-dollar
    label: 'Transacoes',
  },
];
