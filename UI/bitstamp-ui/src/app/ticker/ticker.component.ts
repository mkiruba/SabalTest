import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TickerService } from "../ticker.service";

@Component({
  selector: "app-ticker",
  templateUrl: "./ticker.component.html",
  styleUrls: ["./ticker.component.css"]
})
export class TickerComponent implements OnInit {
  title: string;
  ticker: any;
  tableHeaders: any;
  tableValues: any;

  constructor(
    private route: ActivatedRoute,
    private tickerService: TickerService
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.data["title"];
  }

  onCurrencyChange($event) {
    this.getTicker($event);    
  }

  getTicker(currencyPair: string) {
    this.tickerService.getTicker(currencyPair).subscribe(x => {
      this.ticker = x;
      this.tableHeaders = Object.keys(this.ticker);
      this.tableValues = Object.values(this.ticker);
    });
  }  
}
