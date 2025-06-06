import { PaymentMethod } from '@shared/enums';
export interface Account {
  name: string;
  color: string;
  amount?: number;
  budget?: number;
  paymentMethods?: PaymentMethod[];
}
