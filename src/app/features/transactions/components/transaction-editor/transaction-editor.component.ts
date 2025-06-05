import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  inject,
} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Account, Category, Transaction } from '@core/models';
import { faBan, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components';
import { DrawerComponent } from '@shared/components/drawer/drawer.component';
import { InputComponent, SelectComponent } from '@shared/components/form';
import { PaymentMethod } from '@shared/enums';

@Component({
  selector: 'app-transaction-editor',
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    DrawerComponent,
    InputComponent,
    SelectComponent,
  ],
  templateUrl: './transaction-editor.component.html',
  styleUrl: './transaction-editor.component.scss',
})
export class TransactionEditorComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Input() transaction: Transaction | null = null;

  @Output() submitted = new EventEmitter<Transaction>();
  @Output() closed = new EventEmitter<void>();

  faBan = faBan;
  faCheck = faCheck;
  faPen = faPen;

  isEditing = false;
  categories: Category[] = []; // TODO get from database
  accounts: Account[] = []; // TODO get from database
  paymentMethods: PaymentMethod[] = []; // TODO get from accounts
  // TODO transaction types

  private fb = inject(FormBuilder);

  transactionForm = this.fb.group({
    name: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    amount: this.fb.control<number | null>(null, [
      Validators.required,
      Validators.min(0.01),
    ]),
    date: this.fb.control<string | null>(null, [Validators.required]),
    account: this.fb.control<Account | null>(null, [Validators.required]),
    paymentMethod: this.fb.control<PaymentMethod | null>(null, [
      Validators.required,
    ]),
    category: this.fb.control<Category | null>(null, [Validators.required]),
    isIncome: this.fb.control<boolean | null>(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.isEditing = !this.transaction;
  }

  ngOnChanges(): void {
    if (this.transaction) {
      this.transactionForm.patchValue(this.transaction);
      this.isEditing = false;
      return;
    }

    this.isEditing = true;
  }

  submit(): void {
    if (this.transactionForm.invalid) {
      this.transactionForm.markAllAsTouched();
      return;
    }

    const transaction = this.transactionForm.getRawValue() as Transaction;
    this.submitted.emit(transaction);
    this.close();
  }

  close(): void {
    this.isEditing = false;
    this.transactionForm.reset();
    this.closed.emit();
  }

  cancel(): void {
    if (this.transaction) {
      this.transactionForm.patchValue(this.transaction);
      this.isEditing = false;
      return;
    }

    this.close();
  }

  edit(): void {
    this.isEditing = true;
  }
}
