import { TestBed } from '@angular/core/testing';

import { PreFlightGuard } from './pre-flight.guard';

describe('PreFlightGuard', () => {
  let guard: PreFlightGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreFlightGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
