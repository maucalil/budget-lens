import { Injectable } from '@angular/core';
import {
  asyncScheduler,
  distinctUntilChanged,
  map,
  Observable,
  observeOn,
  scan,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private requestCounter$ = new Subject<number>();
  public readonly loading$: Observable<boolean>;

  constructor() {
    this.loading$ = this.requestCounter$.pipe(
      scan((acc, value) => Math.max(0, acc + value), 0),
      map(count => count > 0),
      distinctUntilChanged(),
      observeOn(asyncScheduler)
    );
  }

  show(): void {
    this.requestCounter$.next(+1);
  }

  hide(): void {
    this.requestCounter$.next(-1);
  }
}
