import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./AppComponent";
import { InputSelectionComponent } from './input-selection/input-selection.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSelectionComponent,
    ChartComponent,
    TableComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
