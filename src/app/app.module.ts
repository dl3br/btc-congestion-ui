import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MinFeeComponent } from './min-fee/min-fee.component';
import { MinFeeService } from './min-fee.service';
import { ChartistModule } from 'ng-chartist';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    MinFeeComponent
  ],
  imports: [
    BrowserModule,
    ChartistModule,
    HttpModule,
  ],
  providers: [MinFeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
