import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-selector',
  imports: [CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
})
export class SelectorComponent {
  @Input() options: string[] = [];
  @Input() selectedOption = '';
  @Input() disabled = false;
  @Output() selectionChange = new EventEmitter<string>();

  onSelectionChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(selectedValue);
  }
}
