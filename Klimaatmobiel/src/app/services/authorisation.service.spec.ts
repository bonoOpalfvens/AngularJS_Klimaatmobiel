import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthorisationService } from './authorisation.service';

describe('AuthorisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AuthorisationService = TestBed.get(AuthorisationService);
    expect(service).toBeTruthy();
  });
});
