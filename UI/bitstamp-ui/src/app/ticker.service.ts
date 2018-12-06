import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, } from 'rxjs';
import { Ticker } from './ticker';

const TICKERURL = 'https://www.bitstamp.net/api/v2/ticker';

@Injectable({
  providedIn: 'root'
})
export class TickerService {
 
  constructor(private http: HttpClient) { }

  getTicker(currencyPair: string): Observable<Ticker> {
    console.log(`Search - ${currencyPair}`);
    if (currencyPair.length < 1 && !currencyPair.trim()) {
      // if not search term, return empty observable.
      return empty();
    }

    return this.http.get<Ticker>(`${TICKERURL}/${currencyPair}`);
  }
}
