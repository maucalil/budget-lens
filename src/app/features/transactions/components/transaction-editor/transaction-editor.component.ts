import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  inject,
  signal,
  computed,
} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Account, Category, Transaction } from '@core/models';
import { AccountService, CategoryService } from '@core/services';
import { faBan, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components';
import { DrawerComponent } from '@shared/components/drawer/drawer.component';
import { InputComponent, SelectComponent } from '@shared/components/form';
import { PaymentMethod } from '@shared/enums';
import { forkJoin } from 'rxjs';

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

  isEditing = signal(false);

  categories = signal<Category[]>([]);
  accounts = signal<Account[]>([]);
  selectedAccount = signal<Account | null>(null);
  paymentMethods = computed(() => this.selectedAccount()?.paymentMethods ?? []);

  // TODO transaction types

  private fb = inject(FormBuilder);
  private categoryService = inject(CategoryService);
  private accountService = inject(AccountService);

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
    this.isEditing.set(!this.transaction);

    this.transactionForm.get('account')?.valueChanges.subscribe(account => {
      this.selectedAccount.set(account);
      this.transactionForm.get('paymentMethod')?.reset();
    });
  }

  ngOnChanges(): void {
    if (this.isOpen) {
      this.loadEditorData();
    }

    if (this.transaction) {
      this.transactionForm.patchValue(this.transaction);
      this.selectedAccount.set(this.transaction.account);
      this.isEditing.set(false);
      return;
    }

    this.isEditing.set(true);
  }

  loadEditorData(): void {
    forkJoin({
      accounts: this.accountService.getAll(),
      categories: this.categoryService.getAll(),
    }).subscribe({
      next: ({ accounts, categories }) => {
        this.accounts.set(accounts);
        this.categories.set(categories);
      },
      error: error => {
        console.error('Failed to load form dependencies', error);
      },
    });
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
    this.isEditing.set(false);
    this.transactionForm.reset();
    this.closed.emit();
  }

  cancel(): void {
    if (this.transaction) {
      this.transactionForm.patchValue(this.transaction);
      this.isEditing.set(false);
      return;
    }

    this.close();
  }

  edit(): void {
    this.isEditing.set(true);
  }
}
