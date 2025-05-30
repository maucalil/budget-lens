import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() text = '';
  @Input() color = '#000000';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
