import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CurrencyPairsService } from "../currency-pairs.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-input-selection",
  templateUrl: "./input-selection.component.html",
  styleUrls: ["./input-selection.component.css"]
})
export class InputSelectionComponent implements OnInit {
  selectedCurrencyPair: string;
  currencyPairs: string[];
  message: string;
  safetyPercentage: number;
  showSafetyPercentage: boolean;

  @Output() currencyChangeEvent = new EventEmitter<string>();
  @Output() safetyPercentChangeEvent = new EventEmitter<number>();

  constructor(
    private currencyPairsService: CurrencyPairsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currencyPairs = this.currencyPairsService.CurrenyPairs;
    this.selectedCurrencyPair = this.currencyPairs[0];
    this.showSafetyPercentage = this.router.url=== '/orderbookestimator'
    console.log(this.showSafetyPercentage);
  }

  currencyPairChanged(currencyPair: string) {
    this.selectedCurrencyPair = currencyPair;
  }

  getData() {
    this.currencyChangeEvent.emit(this.selectedCurrencyPair);
    if(this.showSafetyPercentage){
      this.safetyPercentChangeEvent.emit(this.safetyPercentage);
    }
  }
}
