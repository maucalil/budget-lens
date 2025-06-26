import { Component, Input } from '@angular/core';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import {
  BaseFormControlComponent,
  FormFieldComponent,
} from '@shared/components/form';

@Component({
  selector: 'app-multi-badge-select',
  imports: [BadgeComponent, FormFieldComponent],
  templateUrl: './multi-badge-select.component.html',
  styleUrl: './multi-badge-select.component.scss',
})
export class MultiBadgeSelectComponent<T> extends BaseFormControlComponent {
  @Input() options: T[] = [];
  @Input() optionLabelKey?: keyof T | ((option: T) => string);
  @Input() selectedColor = '#023c4d';
  @Input() unselectedColor = '#f5f5f561';

  get noOptionsSelected(): boolean {
    const selectedOptions: T[] = this.control.value ?? [];
    return selectedOptions.length === 0;
  }

  toggleSelection(option: T) {
    const selectedOptions: T[] = this.control.value ?? [];

    const updatedOptions = this.isSelected(option)
      ? selectedOptions.filter(
          selected => !this.compareObjects(selected, option)
        )
      : [...selectedOptions, option];

    this.control.setValue(updatedOptions);
    this.control.markAsDirty();
    this.control.markAsTouched();
  }

  isSelected(option: T): boolean {
    const selectedOptions: T[] = this.control.value ?? [];
    return selectedOptions.some(selected =>
      this.compareObjects(selected, option)
    );
  }

  resolveOptionLabel(option: T): string {
    if (typeof this.optionLabelKey === 'function') {
      return this.optionLabelKey(option);
    }

    if (this.optionLabelKey && option[this.optionLabelKey] != null) {
      return String(option[this.optionLabelKey]);
    }
    return String(option);
  }

  compareObjects = (o1: T, o2: T): boolean =>
    JSON.stringify(o1) === JSON.stringify(o2);
}
