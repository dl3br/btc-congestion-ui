import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http'
import { timer } from 'rxjs/observable/timer'
import { mergeMap } from 'rxjs/operator/mergeMap'
import { Client } from 'thruway.js'
const wamp = new Client('wss://api.poloniex.com', 'realm1');
const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'
const processResponse = (res: any): number => res['USD']

@Injectable()
export class BtcUsdService {

  constructor(private http: Http) { }

  btcusd$ = timer(0, 30 * 1e+3)
    .mergeMap(() => this.http.get(url)
      .map(x => x.json())
      .map(processResponse)
      // .do(console.log)
    )

}
