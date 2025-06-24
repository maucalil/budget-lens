import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import {
  HttpMessageService,
  LoaderService,
  SnackbarService,
} from '@core/services';
import { tap } from 'rxjs';

export const httpLifecycleInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoaderService);
  const snackbar = inject(SnackbarService);
  const messageService = inject(HttpMessageService);

  loader.show();

  return next(req).pipe(
    tap({
      next: event => {
        if (event instanceof HttpResponse) {
          loader.hide();

          const message = messageService.getMessage(
            req.url,
            req.method,
            'success'
          );

          if (message) {
            snackbar.show(message, 'success');
          }
        }
      },
      error: (err: HttpErrorResponse) => {
        loader.hide();

        if (err.status === 401) {
          return;
        }

        if (err.status === 0) {
          snackbar.show(
            'Não foi possível se conectar. Verifique sua conexão ou tente novamente mais tarde.',
            'error'
          );
          return;
        }

        const fallbackMessage =
          'Um erro inesperado aconteceu. Tente novamente mais tarde.';

        const message = messageService.getMessage(req.url, req.method, 'error');
        snackbar.show(message ?? fallbackMessage, 'error');
      },
    })
  );
};
