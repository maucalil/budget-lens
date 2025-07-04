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
import {
  Account,
  Category,
  Transaction,
  TransactionCreateDto,
  TransactionUpdateDto,
} from '@core/models';
import { AccountService, CategoryService } from '@core/services';
import {
  faBan,
  faCheck,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components';
import { DrawerComponent } from '@shared/components/drawer/drawer.component';
import { InputComponent, SelectComponent } from '@shared/components/form';
import {
  getPaymentMethodLabel,
  getTransactionTypeLabel,
  PaymentMethod,
  TransactionType,
} from '@shared/enums';
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
  readonly transactionTypes = [TransactionType.INCOME, TransactionType.EXPENSE];
  readonly getPaymentMethodLabel = getPaymentMethodLabel;
  readonly getTransactionTypeLabel = getTransactionTypeLabel;

  @Input() isOpen = false;
  @Input() transaction: Transaction | null = null;

  @Output() submitted = new EventEmitter<
    TransactionCreateDto | TransactionUpdateDto
  >();
  @Output() closed = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<number>();

  faBan = faBan;
  faCheck = faCheck;
  faPen = faPen;
  faTrash = faTrash;

  isEditing = signal(false);

  categories = signal<Category[]>([]);
  accounts = signal<Account[]>([]);
  selectedAccount = signal<Account | null>(null);
  paymentMethods = computed(() => this.selectedAccount()?.paymentMethods ?? []);

  private fb = inject(FormBuilder);
  private categoryService = inject(CategoryService);
  private accountService = inject(AccountService);

  transactionForm = this.fb.group({
    name: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    amount: this.fb.control<number | null>(null, [
      Validators.required,
      Validators.min(0.01),
    ]),
    date: this.fb.control<string | null>(null, [Validators.required]),
    type: this.fb.control<TransactionType | null>(null, [Validators.required]),
    account: this.fb.control<Account | null>(null, [Validators.required]),
    paymentMethod: this.fb.control<PaymentMethod | null>(null, [
      Validators.required,
    ]),
    category: this.fb.control<Category | null>(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.isEditing.set(!this.transaction);

    this.transactionForm.get('account')?.valueChanges.subscribe(account => {
      this.selectedAccount.set(account);
      const currentPaymentMethod =
        this.transactionForm.get('paymentMethod')?.value;
      const validMethods = this.paymentMethods();

      if (
        currentPaymentMethod &&
        !validMethods.includes(currentPaymentMethod)
      ) {
        this.transactionForm.get('paymentMethod')?.reset();
      }
    });
  }

  ngOnChanges(): void {
    if (this.isOpen) {
      this.loadEditorData();
    }

    if (this.transaction) {
      this.transactionForm.patchValue({
        ...this.transaction,
        date: this.transaction.date.split('T')[0],
      });
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
    });
  }

  submit(): void {
    if (this.transactionForm.invalid) {
      this.transactionForm.markAllAsTouched();
      return;
    }

    const dto = this.toTransactionCreateDto();

    this.submitted.emit(
      this.transaction === null
        ? (dto as TransactionCreateDto)
        : (dto as TransactionUpdateDto)
    );
    this.close();
  }

  close(): void {
    this.isEditing.set(false);
    this.transactionForm.reset();
    this.closed.emit();
  }

  cancel(): void {
    if (this.transaction) {
      this.transactionForm.patchValue({
        ...this.transaction,
        date: this.transaction.date.split('T')[0],
      });
      this.isEditing.set(false);
      return;
    }

    this.close();
  }

  edit(): void {
    this.isEditing.set(true);
  }

  delete(): void {
    this.deleted.emit(this.transaction!.id);
    this.transactionForm.reset();
  }

  // TODO - better solution for update dto type where fields can be optional
  private toTransactionCreateDto(): TransactionCreateDto {
    const { account, category, ...transactionFields } =
      this.transactionForm.getRawValue();

    return {
      name: transactionFields.name!,
      amount: transactionFields.amount!,
      date: transactionFields.date!,
      type: transactionFields.type!,
      paymentMethod: transactionFields.paymentMethod!,
      accountId: account!.id,
      categoryId: category!.id,
    };
  }
}
