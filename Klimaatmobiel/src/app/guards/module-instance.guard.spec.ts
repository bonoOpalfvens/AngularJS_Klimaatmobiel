import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';

import { ModuleInstanceGuard } from './module-instance.guard';
import { Router } from '@angular/router';

describe('ModuleInstanceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModuleInstanceGuard, {provide: Router, useValue: {}}]
    });
  });

  it('should ...', inject([ModuleInstanceGuard], (guard: ModuleInstanceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
