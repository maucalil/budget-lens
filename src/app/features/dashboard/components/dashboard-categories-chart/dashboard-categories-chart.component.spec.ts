import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoriesChartComponent } from './dashboard-categories-chart.component';

describe('DashboardCategoriesChartComponent', () => {
  let component: DashboardCategoriesChartComponent;
  let fixture: ComponentFixture<DashboardCategoriesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCategoriesChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCategoriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
