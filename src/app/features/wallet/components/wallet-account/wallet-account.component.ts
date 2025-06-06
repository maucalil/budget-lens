import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { ButtonComponent, CardComponent } from '@shared/components';
import { PaymentMethod } from '@shared/enums';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTrash,
  faEdit,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '@core/models';
import {
  ColorPickerComponent,
  InputComponent,
  MultiBadgeSelectComponent,
} from '@shared/components/form';
@Component({
  selector: 'app-wallet-account',
  imports: [
    CardComponent,
    FontAwesomeModule,
    ColorPickerComponent,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    MultiBadgeSelectComponent,
  ],
  templateUrl: './wallet-account.component.html',
  styleUrl: './wallet-account.component.scss',
})
export class WalletAccountComponent implements OnChanges, OnInit {
  @Input() account: Account | null = null;

  @Output() submitted = new EventEmitter<Account>();
  @Output() closed = new EventEmitter<void>();

  isEditing = signal(false);
  allPaymentMethods = Object.values(PaymentMethod);

  faTrash = faTrash;
  faEdit = faEdit;
  faCheck = faCheck;
  faXmark = faXmark;

  private formBuilder = inject(FormBuilder);

  accountForm = this.formBuilder.group({
    name: this.formBuilder.control<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    color: this.formBuilder.control<string | null>(null, [
      Validators.pattern(/^#[0-9A-Fa-f]{6}$/),
    ]),
    amount: this.formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.min(0.01),
    ]),
    budget: this.formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.min(0.01),
    ]),
    paymentMethods: this.formBuilder.control<PaymentMethod[] | null>(null, [
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    this.isEditing.set(this.account === null);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newAccount = this.account === null;
    this.isEditing.set(newAccount);

    if (changes['account']) {
      if (newAccount) {
        this.accountForm.reset();
      } else if (this.account) {
        this.accountForm.patchValue(this.account);
      }
    }
  }

  edit() {
    this.isEditing.update(() => true);
  }

  save() {
    if (this.accountForm.invalid) {
      this.accountForm.markAllAsTouched();
      return;
    }

    this.submitted.emit(this.accountForm.getRawValue() as Account);
    this.isEditing.set(false);
  }

  cancel() {
    if (this.account) {
      this.accountForm.patchValue(this.account);
    } else {
      this.close();
    }
    this.isEditing.update(() => false);
  }

  close() {
    this.isEditing.update(() => false);
    this.accountForm.reset();
    this.closed.emit();
  }

  delete() {
    this.isEditing.update(() => false);
  }
}
