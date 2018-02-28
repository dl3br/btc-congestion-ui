import { Injectable } from '@angular/core';
import { Client } from 'thruway.js'
import { Observable } from 'rxjs/Observable'
import { timer } from 'rxjs/observable/timer'
import { WampConnectorService } from './wamp-connector.service'
import { Http } from '@angular/http'
import { merge } from 'rxjs/observable/merge'
import { config } from '../../config'

const url = 'https://' + config.url + '/api/v1/btc/minsfromlastblock'

@Injectable()
export class BlockDetectorService {

  constructor(private wamp: WampConnectorService, private http: Http) { }

  lastBlock$: Observable<{ minutes: number, blockHash: string }> =
    merge(
      this.http.get(url).map(x => x.json()),
      this.wamp.getWamp()
        .topic('com.fee.v1.btc.minsfromlastblock')
        .flatMap(x => x.args),
  )
}
