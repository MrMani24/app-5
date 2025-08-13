import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNavigation } from './public-navigation';

describe('PublicNavigation', () => {
  let component: PublicNavigation;
  let fixture: ComponentFixture<PublicNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
