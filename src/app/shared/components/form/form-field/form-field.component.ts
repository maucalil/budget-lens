import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  @Input() label = '';
  @Input() fieldId = '';
  @Input() isInvalid = false;
  @Input() errorMessage: string | null = null;
}
