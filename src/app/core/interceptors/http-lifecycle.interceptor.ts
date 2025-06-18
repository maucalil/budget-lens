import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiResponse } from '@core/models';
import { LoaderService } from '@core/services';
import { tap } from 'rxjs';

export const httpLifecycleInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoaderService);
  loader.show();

  return next(req).pipe(
    tap({
      next: event => {
        if (event instanceof HttpResponse) {
          loader.hide();
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
        loader.hide();
        console.error('[HTTP Error]', req.method, req.url, err.error);
      },
    })
  );
};
