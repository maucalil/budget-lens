import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

type InputState = 'readonly' | 'editable' | 'disabled' | 'invalid';
type InputStyle = 'box' | 'underline';
type AllowedInputTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'date';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  private static _nextId = 0;

  @Input() placeholder = '';
  @Input() label = '';
  @Input() styleType: InputStyle = 'box';
  @Input() type: AllowedInputTypes = 'text';
  @Input({ required: true }) formControl!: FormControl;
  @Input({ required: true })
  set formActive(value: boolean) {
    this._formActive = value;
    this.updateState();
  }
  get formActive(): boolean {
    return this._formActive;
  }

  inputId = `input-${InputComponent._nextId++}`;

  private _formActive = false;
  private _state: InputState = 'editable';

  ngOnInit() {
    this.updateState();

    this.formControl.statusChanges.subscribe(() => this.updateState());
  }

  updateState() {
    if (this.formControl.disabled) {
      this._state = 'disabled';
    } else if (this.formControl.invalid && this.formControl.touched) {
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

  get inputClasses() {
    return [this.styleType, this._state].join(' ');
  }

  get errorMessage(): string | null {
    const errors = this.formControl.errors;
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
