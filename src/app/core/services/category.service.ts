import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, Category } from '@core/models';
import { environment } from '@env/environment';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly baseUrl = `${environment.apiUrl}/category`;
  private http = inject(HttpClient);

  getAll(): Observable<Category[]> {
    return this.http
      .get<ApiResponse<Category[]>>(this.baseUrl, {
        withCredentials: true,
      })
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }
}
