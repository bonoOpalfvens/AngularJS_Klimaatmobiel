import { TestBed, async, inject } from '@angular/core/testing';

import { ModuleInstanceGuard } from './module-instance.guard';

describe('ModuleInstanceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleInstanceGuard]
    });
  });

  it('should ...', inject([ModuleInstanceGuard], (guard: ModuleInstanceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
