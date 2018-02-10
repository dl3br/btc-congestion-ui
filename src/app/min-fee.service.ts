import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { merge } from 'rxjs/observable/merge'
import { timer } from 'rxjs/observable/timer'
import { Http } from '@angular/http'
import 'rxjs/add/operator/delayWhen'
import { Client } from 'thruway.js'
import { WampConnectorService } from './wamp-connector.service'
const url = 'http://159.100.247.219:3000/btc/deals'

@Injectable()
export class MinFeeService {

  constructor(private http: Http, private wamp: WampConnectorService) { }

  minDiff$: Observable<MinDiff[]> = merge(
    this.http.get(url).map(x => x.json()),
    this.wamp.getWamp().topic('com.fee.deals').flatMap(x => x.args)
  ).share()

  lastUpdatedCounter$ = this.minDiff$
    .switchMap(_ => timer(0, 1e+3))
}

export interface MinDiff {
  targetBlock: number
  feeRate: number
  date: string
  score: number
}
