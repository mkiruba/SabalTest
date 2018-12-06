import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbookestimatorComponent } from './orderbookestimator.component';

describe('OrderbookestimatorComponent', () => {
  let component: OrderbookestimatorComponent;
  let fixture: ComponentFixture<OrderbookestimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderbookestimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbookestimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
