import { TestBed } from '@angular/core/testing';

import { SameUserGuarService } from './same-user-guard.service';

describe('SameUserGuarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SameUserGuarService = TestBed.get(SameUserGuarService);
    expect(service).toBeTruthy();
  });
});
