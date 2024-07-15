import { TestBed } from '@angular/core/testing';

import { Interceptor2Service } from './interceptor2.service';

describe('Interceptor2Service', () => {
  let service: Interceptor2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Interceptor2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
