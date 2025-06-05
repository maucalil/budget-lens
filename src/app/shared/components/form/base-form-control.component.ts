import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

type State = 'readonly' | 'editable' | 'disabled' | 'invalid';
type Style = 'box' | 'underline';

@Component({
  template: '',
})
export class BaseFormControlComponent implements OnInit, OnChanges {
  private static _nextId = 0;

  @Input() label = '';
  @Input() placeholder = '';
  @Input() styleType: Style = 'box';
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) formActive!: boolean;

  fieldId = `form-field-id-${BaseFormControlComponent._nextId++}`;

  protected _state: State = 'editable';

  ngOnInit() {
    this.updateState();
    this.control.statusChanges.subscribe(() => this.updateState());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formActive']) {
      this.updateState();
    }
  }

  updateState() {
    if (this.control.disabled) {
      this._state = 'disabled';
    } else if (this.control.invalid && this.control.touched) {
      this._state = 'invalid';
    } else if (!this.formActive) {
      this._state = 'readonly';
    } else {
      this._state = 'editable';
    }
  }

  get isDisabled() {
    return this._state === 'disabled';
  }

  get isReadOnly() {
    return this._state === 'readonly';
  }

  get isInvalid() {
    return this._state === 'invalid';
  }

  get classes() {
    return [this.styleType, this._state].join(' ');
  }

  get errorMessage(): string | null {
    const errors = this.control.errors;
    if (!errors) return null;

    if (errors['required']) return 'Este campo é obrigatório.';
    if (errors['email']) return 'Insira um email válido.';
    if (errors['minlength'])
      return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;
    if (errors['maxlength'])
      return `Máximo de ${errors['maxlength'].requiredLength} caracteres.`;
    if (errors['pattern']) return 'Formato inválido.';

    return 'Valor inválido.';
  }
}
