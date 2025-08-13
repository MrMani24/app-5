import { TestBed } from '@angular/core/testing';

import { DashbordServic } from './dashbord-servic';

describe('DashbordServic', () => {
  let service: DashbordServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashbordServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
