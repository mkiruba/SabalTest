import { TestBed } from '@angular/core/testing';

import { OrderbookEstimatorService } from './orderbook-estimator.service';

describe('OrderbookEstimatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderbookEstimatorService = TestBed.get(OrderbookEstimatorService);
    expect(service).toBeTruthy();
  });
});
