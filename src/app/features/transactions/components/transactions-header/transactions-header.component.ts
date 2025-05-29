import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components';

@Component({
  selector: 'app-transactions-header',
  imports: [ButtonComponent, FontAwesomeModule],
  templateUrl: './transactions-header.component.html',
  styleUrl: './transactions-header.component.scss',
})
export class TransactionsHeaderComponent {
  @Output() addClicked = new EventEmitter<void>();
  @Output() filterClicked = new EventEmitter<void>();

  faPlus = faPlus;
  faFilter = faFilter;

  onAddClick() {
    this.addClicked.emit();
  }

  onFilterClick() {
    this.filterClicked.emit();
  }
}
