import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNavigation } from './private-navigation';

describe('PrivateNavigation', () => {
  let component: PrivateNavigation;
  let fixture: ComponentFixture<PrivateNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
