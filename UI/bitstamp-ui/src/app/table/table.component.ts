import { Component, OnInit, Input } from '@angular/core';
import { TickerService } from '../ticker.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  ticker: any;
  tableHeaders: any;
  tableValues: any;
  @Input() currencyPair: string;

  constructor(private tickerService: TickerService) { }

  ngOnInit() {    
    this.currencyPair = 'btcusd';
    this.getTicker();
  }

  getTicker() {
    this.tickerService.getTicker(this.currencyPair).subscribe(x => {
      this.ticker = x;
      this.tableHeaders = Object.keys(this.ticker);
      this.tableValues = Object.values(this.ticker);
    });   
  }
}
