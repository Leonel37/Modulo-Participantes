import { TestBed } from '@angular/core/testing';

import { CategoriaParticipacionService } from './categoria-participacion.service';

describe('CategoriaParticipacionService', () => {
  let service: CategoriaParticipacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaParticipacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
