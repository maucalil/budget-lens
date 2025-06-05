import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { BaseFormControlComponent } from '../base-form-control.component';

@Component({
  selector: 'app-color-picker',
  imports: [ReactiveFormsModule, FormFieldComponent],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent extends BaseFormControlComponent {}
