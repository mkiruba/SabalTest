import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderbookService } from '../orderbook.service';

@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {
  title: string;
  orderbooks: any;
  tableHeaders: any;
  tableValues: any;

  constructor(private route: ActivatedRoute,
    private orderBookService: OrderbookService,) { }

  ngOnInit() {
    this.title = this.route.snapshot.data["title"];
  }
  onCurrencyChange($event) {
    this.getOrderBook($event);    
  }

  getOrderBook(currencyPair: string) {
    this.orderBookService.getOrderbook(currencyPair).subscribe(x => {
      this.orderbooks = x;
      this.tableHeaders = Object.keys(this.orderbooks);
      this.tableValues = Object.values(this.orderbooks);
    });
  }

  isNumber(val) {
    return typeof val === "string";
  }
  
  isObject(val) {
    return typeof val === "object";
  }
}
