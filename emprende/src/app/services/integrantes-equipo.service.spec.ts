import { TestBed } from '@angular/core/testing';

import { IntegrantesEquipoService } from './integrantes-equipo.service';

describe('IntegrantesEquipoService', () => {
  let service: IntegrantesEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegrantesEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
