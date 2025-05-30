import { Component, Input, signal } from '@angular/core';
import { BadgeComponent, CardComponent } from '@shared/components';
import { PaymentMethod } from '@shared/enums';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTrash,
  faEdit,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ColorPickerComponent } from '@shared/components/inputs/color-picker/color-picker.component';

@Component({
  selector: 'app-wallet-account-card',
  imports: [
    CardComponent,
    BadgeComponent,
    FontAwesomeModule,
    ColorPickerComponent,
  ],
  templateUrl: './wallet-account-card.component.html',
  styleUrl: './wallet-account-card.component.scss',
})
export class WalletAccountCardComponent {
  @Input() set setPaymentMethods(items: PaymentMethod[]) {
    this.paymentMethods = [...items];
  }

  allPaymentMethods = Object.values(PaymentMethod);
  paymentMethods: PaymentMethod[] = [
    PaymentMethod.CASH,
    PaymentMethod.CREDIT_CARD,
  ];

  isEditing = signal(false);

  faTrash = faTrash;
  faEdit = faEdit;
  faCheck = faCheck;
  faXmark = faXmark;

  onEdit() {
    this.isEditing.update(value => !value);
  }

  onSave() {
    this.isEditing.set(false);
  }

  isSelected(paymentMethod: PaymentMethod): boolean {
    return this.paymentMethods.includes(paymentMethod);
  }

  toggleSelection(method: PaymentMethod) {
    if (this.isSelected(method)) {
      this.paymentMethods = this.paymentMethods.filter(m => m !== method);
    } else {
      this.paymentMethods = [...this.paymentMethods, method];
    }
  }
}
