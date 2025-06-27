import { PaymentMethod } from '@shared/enums';

export interface Account {
  id: number;
  name: string;
  color: string;
  amount: number;
  paymentMethods: PaymentMethod[];
}

export type AccountCreateDto = Omit<Account, 'id'>;
export type AccountUpdateDto = Partial<AccountCreateDto>;

export interface AccountSubmissionPayload {
  dto: AccountCreateDto | AccountUpdateDto;
  id: number | null;
}
