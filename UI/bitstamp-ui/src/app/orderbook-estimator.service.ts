import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, } from 'rxjs';
import { OrderBookEstimator } from './orderBookEstimator';

const ORDERBOOKESTURL = 'http://sabal.azurewebsites.net/api/bitstamp/orderbookestimator';
@Injectable({
  providedIn: 'root'
})
export class OrderbookEstimatorService {

  constructor(private http: HttpClient) { }

  getOrderBookEstimator(currencyPair: string, safetyPercent: number): Observable<OrderBookEstimator> {
    console.log(`Search - ${currencyPair}`);
    console.log(`safetyPercent - ${safetyPercent}`);
    if (currencyPair.length < 1 && !currencyPair.trim()) {
      // if not search term, return empty observable.
      return empty();
    }

    return this.http.get<OrderBookEstimator>(`${ORDERBOOKESTURL}/${currencyPair}/${safetyPercent}`);
  }
}
