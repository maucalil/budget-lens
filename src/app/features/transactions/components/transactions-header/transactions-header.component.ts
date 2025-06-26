import { Component, EventEmitter, Output } from '@angular/core';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components';

@Component({
  selector: 'app-transactions-header',
  imports: [ButtonComponent],
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
