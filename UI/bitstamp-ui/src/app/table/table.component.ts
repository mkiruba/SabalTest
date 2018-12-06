import { Component, OnInit, Input } from "@angular/core";
import { TickerService } from "../ticker.service";
import { OrderbookService } from "../orderbook.service";
import { TransactionsService } from '../transactions.service';

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  ticker: any;
  tableHeaders: any;
  tableValues: any;
  tableValuesArray: any[] = [];
  orderbooks: any;
  transactions: any[];

  constructor(
    private tickerService: TickerService,
    private orderBookService: OrderbookService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit() {
    //this.currencyPair = 'btcusd';
    //this.getTicker();
  }

  getTicker(currencyPair: string) {
    this.tickerService.getTicker(currencyPair).subscribe(x => {
      this.ticker = x;
      this.tableHeaders = Object.keys(this.ticker);
      this.tableValues = Object.values(this.ticker);
    });
  }

  getOrderBook(currencyPair: string) {
    this.orderBookService.getOrderbook(currencyPair).subscribe(x => {
      this.orderbooks = x;
      this.tableHeaders = Object.keys(this.orderbooks);
      this.tableValues = Object.values(this.orderbooks);
    });
  }
  getTransaction(currencyPair: string) {
    this.transactionsService.getTransaction(currencyPair).subscribe(x => {
      this.transactions = x;
      this.tableHeaders = Object.keys(this.transactions[0]);
      this.transactions.forEach(element => {
        this.tableValuesArray.push(Object.values(element));
      });
      
    });
  }

  isNumber(val) {
    return typeof val === "string";
  }
  isObject(val) {
    return typeof val === "object";
  }
  isUndefined(val) {
    console.log(`undefined - ${typeof val}`);
    return typeof val === "undefined";
  }
  getKeys(val) {
    return Object.values(val);
  }
}
