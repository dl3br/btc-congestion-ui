import { Injectable } from '@angular/core';
import { Client } from 'thruway.js'
import { Observable } from 'rxjs/Observable'
import { merge } from 'rxjs/observable/merge'
import { timer } from 'rxjs/observable/timer'
import 'rxjs/add/operator/delayWhen'
import { Http } from '@angular/http'
const wamp = new Client('ws://159.100.247.219:8080/ws', 'realm1')
@Injectable()
export class MinFeeService {
  constructor(private http: Http) { }

  minDiff$: Observable<MinDiff[]> = merge(
    this.http.get('http://159.100.247.219:3000').map(x => x.json()),
    wamp.topic('com.fee.mindiff').flatMap(x => x.args)
  )
  .retryWhen(errors =>
    errors
      .do(err => console.error(`Error: ${err}`))
      .delayWhen(val => Observable.timer(10)))
}

export interface MinDiff {
  targetBlock: number,
  feeRate: number,
  timestamp: number,
  date: string,
  diff: number,
  cumDiff: number
}
