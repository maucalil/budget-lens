import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormControlComponent } from '@shared/components/inputs/base-form-control.component';
import { FormFieldComponent } from '@shared/components/inputs/form-field/form-field.component';

type AllowedInputTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'date';

@Component({
  selector: 'app-input',
  imports: [FormFieldComponent, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends BaseFormControlComponent {
  @Input() type: AllowedInputTypes = 'text';
}
