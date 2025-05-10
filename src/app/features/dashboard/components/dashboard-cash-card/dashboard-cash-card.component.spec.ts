import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCashCardComponent } from './dashboard-cash-card.component';

describe('DashboardCashCardComponent', () => {
  let component: DashboardCashCardComponent;
  let fixture: ComponentFixture<DashboardCashCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCashCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
