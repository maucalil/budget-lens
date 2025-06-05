import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drawer',
  imports: [ButtonComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  faXmark = faXmark;

  close(): void {
    this.closed.emit();
  }
}
