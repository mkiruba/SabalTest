import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyPairsService } from '../currency-pairs.service';
import { TickerService } from '../ticker.service';

@Component({
  selector: 'app-input-selection',
  templateUrl: './input-selection.component.html',
  styleUrls: ['./input-selection.component.css']
})
export class InputSelectionComponent implements OnInit {
  selectedCurrencyPair: string;
  currencyPairs: string[];
  message:string;
  @Output() currencyChangeEvent = new EventEmitter<string>();

  constructor(private currencyPairsService: CurrencyPairsService, private tickerService: TickerService) { }

  ngOnInit() {
    this.currencyPairs = this.currencyPairsService.CurrenyPairs;
    this.selectedCurrencyPair = this.currencyPairs[0];
  }

  currencyPairChanged(currencyPair: string){
    this.selectedCurrencyPair = currencyPair;
  }

  getData(){
this.currencyChangeEvent.emit(this.selectedCurrencyPair);
  }
}
