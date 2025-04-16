import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bloguserGuard } from './bloguser.guard';

describe('bloguserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bloguserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
