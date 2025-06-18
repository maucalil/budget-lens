export interface AnalyticsQuery {
  month: string | number;
  year: string | number;
}

export interface AnalyticsCashFlow {
  income: number;
  expense: number;
  balance: number;
}

export interface AnalyticsChart {
  labels: string[];
  datasets: {
    data: number[];
    label?: string;
    backgroundColor?: string[];
  }[];
}
