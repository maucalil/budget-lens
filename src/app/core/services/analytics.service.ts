import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '@core/models';
import {
  AnalyticsCashFlow,
  AnalyticsChart,
  AnalyticsQuery,
} from '@core/models/analytics.interface';
import { environment } from '@env/environment';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly baseUrl = `${environment.apiUrl}/analytics`;
  private http = inject(HttpClient);

  getCashFlow(filters: AnalyticsQuery): Observable<AnalyticsCashFlow> {
    const params = new HttpParams()
      .set('month', filters.month.toString())
      .set('year', filters.year.toString());

    return this.http
      .get<ApiResponse<AnalyticsCashFlow>>(`${this.baseUrl}/cash-flow`, {
        params,
        withCredentials: true,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  getMonthlyIncomeExpense(filters: AnalyticsQuery): Observable<AnalyticsChart> {
    const params = new HttpParams()
      .set('month', filters.month.toString())
      .set('year', filters.year.toString());

    return this.http
      .get<ApiResponse<AnalyticsChart>>(
        `${this.baseUrl}/monthly-income-expense`,
        {
          params,
          withCredentials: true,
        }
      )
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  getExpensesByCategory(filters: AnalyticsQuery): Observable<AnalyticsChart> {
    const params = new HttpParams()
      .set('month', filters.month.toString())
      .set('year', filters.year.toString());

    return this.http
      .get<ApiResponse<AnalyticsChart>>(
        `${this.baseUrl}/expenses-by-category`,
        {
          params,
          withCredentials: true,
        }
      )
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }
}
