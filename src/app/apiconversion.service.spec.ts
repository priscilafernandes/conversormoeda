import { TestBed } from '@angular/core/testing';

import { ApiconversionService } from './apiconversion.service';

describe('ApiconversionService', () => {
  let service: ApiconversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
