import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiResponseInterceptor } from '@core/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    provideEnvironmentNgxMask({ decimalMarker: ',', thousandSeparator: '.' }),
    provideHttpClient(withInterceptors([apiResponseInterceptor])),
  ],
};
