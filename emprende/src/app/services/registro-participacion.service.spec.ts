import { TestBed } from '@angular/core/testing';

import { RegistroParticipacionService } from './registro-participacion.service';

describe('RegistroParticipacionService', () => {
  let service: RegistroParticipacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroParticipacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
