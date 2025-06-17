import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, User, UserCreateDto, UserLoginDto } from '@core/models';
import { environment } from '@env/environment';
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  Observable,
  of,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/user`;
  private loggedIn$ = new BehaviorSubject<boolean | null>(null);
  private http = inject(HttpClient);

  register(userCreateDto: UserCreateDto): Observable<User> {
    return this.http
      .post<ApiResponse<User>>(`${this.baseUrl}`, userCreateDto)
      .pipe(
        filter(res => res.success),
        map(res => res.data)
      );
  }

  login(userLoginDto: UserLoginDto): Observable<null> {
    return this.http
      .post<null>(`${this.baseUrl}/login`, userLoginDto, {
        withCredentials: true,
      })
      .pipe(tap(() => this.loggedIn$.next(true)));
  }

  logout(): Observable<null> {
    return this.http
      .delete<null>(`${this.baseUrl}/logout`, {
        withCredentials: true,
      })
      .pipe(tap(() => this.loggedIn$.next(false)));
  }

  checkSession(): Observable<boolean> {
    return this.http
      .get<null>(`${this.baseUrl}/session`, {
        withCredentials: true,
      })
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  initializeSession(): void {
    this.checkSession().subscribe(isAuthenticated =>
      this.loggedIn$.next(isAuthenticated)
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.pipe(
      filter(loggedIn => loggedIn !== null)
    ) as Observable<boolean>;
  }
}
