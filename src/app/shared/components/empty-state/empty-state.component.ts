import { Component, Input } from '@angular/core';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-empty-state',
  imports: [FontAwesomeModule],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
})
export class EmptyStateComponent {
  @Input() text? = 'Nenhum item encontrado';
  faXmarkCircle = faXmarkCircle;
}
