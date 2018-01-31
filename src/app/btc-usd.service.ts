import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { timer } from 'rxjs/observable/timer'
import { mergeMap } from 'rxjs/operator/mergeMap'

const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'
const processResponse = (res: any): number => res['USD']
const timeRes = 5 // min

@Injectable()
export class BtcUsdService {

  constructor(private http: Http) { }

  btcusd$ = timer(0, timeRes * 60e+3)
    .mergeMap(() => this.http.get(url)
      .map(x => x.json())
      .map(processResponse)
    )

}
