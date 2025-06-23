import { computed, Injectable, signal } from '@angular/core';

type SnackbarType = 'success' | 'warning' | 'error' | 'info';

interface SnackbarState {
  message: string;
  type: SnackbarType;
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private _state = signal<SnackbarState | null>(null);

  readonly state = computed(() => this._state());

  show(message: string, type: SnackbarType = 'success', durationMs = 200000) {
    this._state.set({ message, type });
    setTimeout(() => this._state.set(null), durationMs);
  }

  close() {
    this._state.set(null);
  }
}
