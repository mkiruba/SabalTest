import { Component, ViewChild, AfterViewInit, Output } from '@angular/core';
import { InputSelectionComponent } from './input-selection/input-selection.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCurrencyPair = 'btcusd';    



}
