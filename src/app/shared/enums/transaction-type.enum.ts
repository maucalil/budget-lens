export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export const transactionTypeLabels: Record<TransactionType, string> = {
  [TransactionType.INCOME]: 'Entrada',
  [TransactionType.EXPENSE]: 'Saída ',
};

export const getTransactionTypeLabel = (
  transactionType: TransactionType
): string => transactionTypeLabels[transactionType];
