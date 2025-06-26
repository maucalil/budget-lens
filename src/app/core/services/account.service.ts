import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Account,
  AccountCreateDto,
  AccountUpdateDto,
  ApiResponse,
} from '@core/models';
import { environment } from '@env/environment';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly baseUrl = `${environment.apiUrl}/account`;
  private http = inject(HttpClient);

  getAll(): Observable<Account[]> {
    return this.http
      .get<ApiResponse<Account[]>>(this.baseUrl, {
        withCredentials: true,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  getById(id: number): Observable<Account> {
    return this.http
      .get<ApiResponse<Account>>(`${this.baseUrl}/${id}`, {
        withCredentials: true,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  create(accountCreaetDto: AccountCreateDto): Observable<Account> {
    return this.http
      .post<ApiResponse<Account>>(this.baseUrl, accountCreaetDto, {
        withCredentials: true,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  update(id: number, accountUpdateDto: AccountUpdateDto): Observable<Account> {
    return this.http
      .put<ApiResponse<Account>>(`${this.baseUrl}/${id}`, accountUpdateDto, {
        withCredentials: true,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  delete(id: number): Observable<null> {
    return this.http.delete<null>(`${this.baseUrl}/${id}`, {
      withCredentials: true,
    });
  }
}
