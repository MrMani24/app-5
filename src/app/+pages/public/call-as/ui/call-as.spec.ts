import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAs } from './call-as';

describe('CallAs', () => {
  let component: CallAs;
  let fixture: ComponentFixture<CallAs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallAs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallAs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
