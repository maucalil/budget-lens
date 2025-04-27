import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
