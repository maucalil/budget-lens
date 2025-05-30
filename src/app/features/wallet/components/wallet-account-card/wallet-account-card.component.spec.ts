import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAccountCardComponent } from './wallet-account-card.component';

describe('WalletAccountCardComponent', () => {
  let component: WalletAccountCardComponent;
  let fixture: ComponentFixture<WalletAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletAccountCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WalletAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
