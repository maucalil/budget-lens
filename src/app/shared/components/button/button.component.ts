import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from 'node_modules/@fortawesome/angular-fontawesome/types';

@Component({
  selector: 'app-button',
  imports: [FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'transparent' =
    'primary';
  @Input() disabled = false;
  @Input() text = '';
  @Input() icon: IconProp | null = null;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
