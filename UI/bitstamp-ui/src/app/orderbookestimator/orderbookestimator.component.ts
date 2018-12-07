import { Component, OnInit } from '@angular/core';
import { OrderbookEstimatorService } from '../orderbook-estimator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderbookestimator',
  templateUrl: './orderbookestimator.component.html',
  styleUrls: ['./orderbookestimator.component.css']
})
export class OrderbookestimatorComponent implements OnInit {
  title: string;
  orderbookEstimators: any;
  tableHeaders: any;
  tableValues: any;
  selectedCurrency: string;
  safetyPercentage: number;
  constructor(private route: ActivatedRoute,
    private orderBookEstService: OrderbookEstimatorService) { }

  ngOnInit() {
    this.title = this.route.snapshot.data["title"];
  }
  onCurrencyChange($event) {
    this.selectedCurrency = $event;
  }

  onSafetyPercentChange($event) {
    this.safetyPercentage = $event;    
    this.getOrderBookEstimator(this.selectedCurrency, $event);
  }

  getOrderBookEstimator(currencyPair: string, safetyPercent: number) {
    this.orderBookEstService.getOrderBookEstimator(currencyPair, safetyPercent).subscribe(x => {
      this.orderbookEstimators = x;
      this.tableHeaders = Object.keys(this.orderbookEstimators);
      this.tableValues = Object.values(this.orderbookEstimators);
    });
  }

  isNumber(val) {
    return typeof val === "number";
  }

  isObject(val) {
    return typeof val === "object";
  }
}
