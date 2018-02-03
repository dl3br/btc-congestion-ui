import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { merge } from 'rxjs/observable/merge'
import { timer } from 'rxjs/observable/timer'
import { Http } from '@angular/http'
import 'rxjs/add/operator/delayWhen'
import { Client } from 'thruway.js'
import { WampConnectorService } from './wamp-connector.service'
import { timer } from 'rxjs/observable/timer'
// const wamp = new Client('ws://159.100.247.219:8080/ws', 'realm1')
@Injectable()
export class MinFeeService {
  constructor(private http: Http, private wamp: WampConnectorService) { }

  minDiff$: Observable<MinDiff[]> = merge(
    this.http.get('http://159.100.247.219:3000').map(x => x.json()),
    this.wamp.getWamp().topic('com.fee.mindiff').flatMap(x => x.args)
  )
    .map(addScore)
    .retryWhen(errors =>
      errors
        .do(err => console.error(`Error: ${err}`))
        .delayWhen(val => timer(10)))
    .share()

  lastUpdatedCounter$ = this.minDiff$
    .switchMap(_ => timer(0, 1e+3))

}

const addScore = (minDiffs: MinDiff[]) => {
  const scores = minDiffs
    .map(x => Math.sqrt(x.diff * x.cumDiff) / x.targetBlock)
  const maxScore = Math.max(...scores)
  return scores.map((x, i) => ({ ...minDiffs[i], score: x / maxScore }))
}

export interface MinDiff {
  targetBlock: number
  feeRate: number
  timestamp: number
  date: string
  diff: number
  cumDiff: number
  score: number
}
