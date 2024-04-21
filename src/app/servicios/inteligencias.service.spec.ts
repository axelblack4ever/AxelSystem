import { TestBed } from '@angular/core/testing';

import { InteligenciasService } from './inteligencias.service';

describe('InteligenciasService', () => {
  let service: InteligenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteligenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
