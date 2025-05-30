import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDateHeaderComponent } from './transaction-date-header.component';

describe('TransactionDateHeaderComponent', () => {
  let component: TransactionDateHeaderComponent;
  let fixture: ComponentFixture<TransactionDateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDateHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
