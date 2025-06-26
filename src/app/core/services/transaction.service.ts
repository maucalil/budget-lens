import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ApiResponse,
  Transaction,
  TransactionCreateDto,
  TransactionFilter,
  TransactionUpdateDto,
} from '@core/models';
import { environment } from '@env/environment';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly baseUrl = `${environment.apiUrl}/transaction`;
  private http = inject(HttpClient);

  getAll(filters?: TransactionFilter): Observable<Transaction[]> {
    return this.http
      .get<ApiResponse<Transaction[]>>(this.baseUrl, {
        withCredentials: true,
        params: filters as HttpParams,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  getById(id: number): Observable<Transaction> {
    return this.http
      .get<ApiResponse<Transaction>>(`${this.baseUrl}/${id}`, {
        withCredentials: true,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  create(transactionCreateDto: TransactionCreateDto): Observable<Transaction> {
    return this.http
      .post<ApiResponse<Transaction>>(this.baseUrl, transactionCreateDto, {
        withCredentials: true,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  update(
    id: number,
    transactionUpdateDto: TransactionUpdateDto
  ): Observable<Transaction> {
    return this.http
      .put<ApiResponse<Transaction>>(
        `${this.baseUrl}/${id}`,
        transactionUpdateDto,
        {
          withCredentials: true,
        }
      )
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, {
      withCredentials: true,
    });
  }
}
