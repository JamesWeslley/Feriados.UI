import { TestBed } from '@angular/core/testing';

import { FeriadoApiService } from './feriado-api.service';

describe('FeriadoApiService', () => {
  let service: FeriadoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeriadoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
