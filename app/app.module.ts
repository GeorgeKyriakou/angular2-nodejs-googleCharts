import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LogComponent} from './components/log/log.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
//import {ChartComponent} from './components/chart/chart.component';
import {GoogleChart} from './directive/chart.directive';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent, LogComponent, GoogleChart],
  bootstrap: [AppComponent]
})
export class AppModule { }
