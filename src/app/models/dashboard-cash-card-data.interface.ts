import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Currency } from './enum/currency.enum';

export interface DashboardCashCardData {
  amount: number;
  currency: Currency;
  name: string;
  icon: IconDefinition;
}
