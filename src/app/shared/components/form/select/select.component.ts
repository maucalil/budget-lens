import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BaseFormControlComponent,
  FormFieldComponent,
} from '@shared/components/form';

@Component({
  selector: 'app-select',
  imports: [FormFieldComponent, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent<T> extends BaseFormControlComponent {
  @Input() options: T[] = [];
  @Input() optionLabelKey?: keyof T | ((option: T) => string);

  resolveOptionLabel(option: T): string {
    if (typeof this.optionLabelKey === 'function') {
      return this.optionLabelKey(option);
    }

    if (this.optionLabelKey && option[this.optionLabelKey] != null) {
      return String(option[this.optionLabelKey]);
    }
    return String(option);
  }

  compareObjects = (o1: T, o2: T) => JSON.stringify(o1) === JSON.stringify(o2);
}
