import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyPairsService {
  CurrenyPairs: string[] = [
    "btcusd", "btceur", "eurusd", "xrpusd", "xrpeur", "xrpbtc", "ltcusd", "ltceur", "ltcbtc", "ethusd", "etheur", "ethbtc", "bchusd", "bcheur", "bchbtc"
  ];
  constructor() { }
}
