import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransactionTableComponent } from './dashboard-transaction-table.component';

describe('DashboardTransactionTableComponent', () => {
  let component: DashboardTransactionTableComponent;
  let fixture: ComponentFixture<DashboardTransactionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTransactionTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
