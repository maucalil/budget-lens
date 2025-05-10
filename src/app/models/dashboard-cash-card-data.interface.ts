import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface DashboardCashCardData {
  value: number;
  currency: 'BRL' | 'USD' | 'EUR' | 'GBP';
  name: string;
  icon: IconDefinition;
}
