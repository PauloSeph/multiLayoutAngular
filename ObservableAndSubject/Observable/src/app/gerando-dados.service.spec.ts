import { TestBed } from '@angular/core/testing';

import { GerandoDadosService } from './gerando-dados.service';

describe('GerandoDadosService', () => {
  let service: GerandoDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerandoDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
