import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { Transaction } from './transaction';

const TRANSACTIONURL = 'http://sabal.azurewebsites.net/api/bitstamp/transactions';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransaction(currencyPair: string): Observable<Transaction[]> {
    console.log(`Search - ${currencyPair}`);
    if (currencyPair.length < 1 && !currencyPair.trim()) {
      // if not search term, return empty observable.
      return empty();
    }

    return this.http.get<Transaction[]>(`${TRANSACTIONURL}/${currencyPair}`);
  }
}
