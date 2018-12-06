import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  @ViewChild(TableComponent) tableComponent;

  constructor() { }

  ngOnInit() {
    // this.selectedCurrencyPair = "btcusd";
  }
  onCurrencyChange($event) {
    console.log($event);
    //this.tableComponent.getTicker($event);    
    // this.tableComponent.getOrderBook($event);
    this.tableComponent.getTransaction($event);
    
  }
}
