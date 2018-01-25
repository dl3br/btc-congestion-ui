import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MinFeeService } from './min-fee.service';
import { BtcUsdService } from './btc-usd.service';
import { ChartistModule } from 'ng-chartist';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChartistModule,
    HttpModule,
  ],
  providers: [MinFeeService, BtcUsdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
