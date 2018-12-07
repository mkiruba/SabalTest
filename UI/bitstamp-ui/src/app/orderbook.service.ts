import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, } from 'rxjs';
import { OrderBook } from './orderBook';

// const ORDERBOOKURL = 'https://www.bitstamp.net/api/v2/order_book';
const ORDERBOOKURL = 'http://sabal.azurewebsites.net/api/bitstamp/orderbook';
@Injectable({
  providedIn: 'root'
})
export class OrderbookService {

  constructor(private http: HttpClient) { }

  getOrderbook(currencyPair: string): Observable<OrderBook> {
    console.log(`Search - ${currencyPair}`);
    if (currencyPair.length < 1 && !currencyPair.trim()) {
      // if not search term, return empty observable.
      return empty();
    }

    return this.http.get<OrderBook>(`${ORDERBOOKURL}/${currencyPair}`);
  }
}
