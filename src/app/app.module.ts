import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { MinFeeService } from './min-fee.service'
import { BtcUsdService } from './btc-usd.service'
import { BlockDetectorService } from './block-detector.service'
import { WampConnectorService } from './wamp-connector.service'
import { ChartistModule } from 'ng-chartist'
import { HttpModule } from '@angular/http'
import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing.module';
import { BtcComponent } from './btc/btc.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BtcComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    ChartistModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [MinFeeService, BtcUsdService, BlockDetectorService, WampConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
