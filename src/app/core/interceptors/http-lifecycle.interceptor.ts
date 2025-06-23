import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiResponse } from '@core/models';
import { LoaderService } from '@core/services';
import { SnackbarService } from '@core/services/snackbar.service';
import { tap } from 'rxjs';

export const httpLifecycleInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoaderService);
  const snackbar = inject(SnackbarService);

  loader.show();

  return next(req).pipe(
    tap({
      next: event => {
        if (event instanceof HttpResponse) {
          loader.hide();
          const body = event.body as ApiResponse<unknown>;
          if (body == null) {
            snackbar.show(`Success: ${req.method} ${req.url}`, 'info');
            return;
          }

          if (body.success) {
            console.log('[HTTP Success]', req.method, req.url, body.data);
            snackbar.show(`Success: ${req.method} ${req.url}`, 'info');
          }
        }
      },
      error: (err: HttpErrorResponse) => {
        loader.hide();
        console.error('[HTTP Error]', req.method, req.url, err.error);
        snackbar.show(`Error: ${req.method} ${req.url}`, 'error');
      },
    })
  );
};
