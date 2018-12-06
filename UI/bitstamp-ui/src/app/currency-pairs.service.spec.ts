import { TestBed } from '@angular/core/testing';

import { CurrencyPairsService } from './currency-pairs.service';

describe('CurrencyPairsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyPairsService = TestBed.get(CurrencyPairsService);
    expect(service).toBeTruthy();
  });
});
