import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEditorComponent } from './transaction-editor.component';

describe('TransactionEditorComponent', () => {
  let component: TransactionEditorComponent;
  let fixture: ComponentFixture<TransactionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
