import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./AppComponent";
import { InputSelectionComponent } from "./input-selection/input-selection.component";
import { ChartComponent } from "./chart/chart.component";
import { TableComponent } from "./table/table.component";
import { MainViewComponent } from "./main-view/main-view.component";
import { TickerComponent } from "./ticker/ticker.component";
import { OrderbookComponent } from "./orderbook/orderbook.component";
import { OrderbookestimatorComponent } from "./orderbookestimator/orderbookestimator.component";
import { TransactionComponent } from "./transaction/transaction.component";

const appRoutes: Routes = [
  { path: "ticker", component: TickerComponent, data: { title: "Ticker" } },
  {
    path: "orderbook",
    component: OrderbookComponent,
    data: { title: "Order Book" }
  },
  {
    path: "orderbookestimator",
    component: OrderbookestimatorComponent,
    data: { title: "Orderbook Estimator" }
  },
  {
    path: "transactions",
    component: TransactionComponent,
    data: { title: "Transactions" }
  },
  { path: "**", component: TickerComponent, data: { title: "Ticker" } }
];

@NgModule({
  declarations: [
    AppComponent,
    InputSelectionComponent,
    ChartComponent,
    TableComponent,
    MainViewComponent,
    TickerComponent,
    OrderbookComponent,
    OrderbookestimatorComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
