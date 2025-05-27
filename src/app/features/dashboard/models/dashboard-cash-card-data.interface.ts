import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Currency } from '@shared/enums';

export interface DashboardCashCardData {
  amount: number;
  currency: Currency;
  name: string;
  icon: IconDefinition;
}
