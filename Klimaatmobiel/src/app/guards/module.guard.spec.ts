import { TestBed, async, inject } from '@angular/core/testing';

import { ModuleGuard } from './module.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('ModuleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModuleGuard, {provide: Router, useValue: {}}]
    });
  });

  it('should ...', inject([ModuleGuard], (guard: ModuleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
