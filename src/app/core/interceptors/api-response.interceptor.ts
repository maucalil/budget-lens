import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { ApiResponse } from '@core/models';
import { tap } from 'rxjs';

export const apiResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap({
      next: event => {
        if (event instanceof HttpResponse) {
          const body = event.body as ApiResponse<unknown>;
          // TODO add snackbar instead of loggin on console
          if (body == null) {
            console.log('[HTTP Success]', req.method, req.url);
            return;
          }

          if (body.success) {
            console.log('[HTTP Success]', req.method, req.url, body.data);
          }
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error('[HTTP Error]', req.method, req.url, err.error);
      },
    })
  );
};
