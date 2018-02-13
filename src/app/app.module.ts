import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { MinFeeService } from './min-fee.service'
import { BtcUsdService } from './btc-usd.service'
import { BlockDetectorService } from './block-detector.service'
import { WampConnectorService } from './wamp-connector.service'
import { HttpModule } from '@angular/http'
import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing.module';
import { BtcComponent } from './btc/btc.component';
import { ApiComponent } from './api/api.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common/';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BtcComponent,
    NavBarComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    MinFeeService,
    BtcUsdService,
    BlockDetectorService,
    WampConnectorService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
