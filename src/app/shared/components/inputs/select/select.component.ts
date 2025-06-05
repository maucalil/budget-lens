import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormControlComponent } from '@shared/components/inputs/base-form-control.component';
import { FormFieldComponent } from '@shared/components/inputs/form-field/form-field.component';

@Component({
  selector: 'app-select',
  imports: [FormFieldComponent, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent<T> extends BaseFormControlComponent {
  @Input() options: T[] = [];
  @Input() optionLabelKey?: keyof T;

  resolveOptionLabel(option: T): string {
    if (this.optionLabelKey && option[this.optionLabelKey] != null) {
      return String(option[this.optionLabelKey]);
    }
    return String(option);
  }

  compareObjects = (o1: T, o2: T) => JSON.stringify(o1) === JSON.stringify(o2);
}
