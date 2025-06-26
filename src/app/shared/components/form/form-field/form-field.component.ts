import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type TextSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
@Component({
  selector: 'app-form-field',
  imports: [NgClass],
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  @Input() label = '';
  @Input() labelSize: TextSize = 'md';
  @Input() fieldId = '';
  @Input() isInvalid = false;
  @Input() errorMessage: string | null = null;
}
