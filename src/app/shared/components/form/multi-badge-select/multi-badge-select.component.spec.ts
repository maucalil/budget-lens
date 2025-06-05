import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBadgeSelectComponent } from './multi-badge-select.component';

describe('MultiBadgeSelectComponent', () => {
  let component: MultiBadgeSelectComponent<unknown>;
  let fixture: ComponentFixture<MultiBadgeSelectComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiBadgeSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiBadgeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
