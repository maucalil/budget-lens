import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIncomeExpenseChartComponent } from './dashboard-income-expense-chart.component';

describe('DashboardIncomeExpenseChartComponent', () => {
  let component: DashboardIncomeExpenseChartComponent;
  let fixture: ComponentFixture<DashboardIncomeExpenseChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardIncomeExpenseChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardIncomeExpenseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
