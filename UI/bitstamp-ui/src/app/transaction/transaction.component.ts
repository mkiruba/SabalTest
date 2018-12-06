import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  title: string;
  tableHeaders: any;
  tableValuesArray: any[] = [];
  transactions: any[];

  constructor(private route: ActivatedRoute, private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.title = this.route.snapshot.data["title"];
  }

  onCurrencyChange($event) {
    this.getTransaction($event);    
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
}
