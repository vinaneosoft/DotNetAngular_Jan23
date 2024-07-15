import { TestBed } from '@angular/core/testing';

import { Incterceptor1Service } from './incterceptor1.service';

describe('Incterceptor1Service', () => {
  let service: Incterceptor1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Incterceptor1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
