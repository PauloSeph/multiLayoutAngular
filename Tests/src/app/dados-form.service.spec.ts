import { TestBed } from '@angular/core/testing';

import { DadosFormService } from './dados-form.service';

describe('DadosFormService', () => {
  let service: DadosFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
