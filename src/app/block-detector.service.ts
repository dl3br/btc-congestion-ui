import { Injectable } from '@angular/core';
import { Client } from 'thruway.js'
import { Observable } from 'rxjs/Observable'
import { timer } from 'rxjs/observable/timer'
import { WampConnectorService } from './wamp-connector.service'
// const wamp = new Client('ws://159.100.247.219:8080/ws', 'realm1')

@Injectable()
export class BlockDetectorService {

  constructor(private wamp: WampConnectorService) { }

  lastBlock$: Observable<{ minutes: number, blockHash: string }> =
  this.wamp.getWamp()
    .topic('com.fee.minsfromlastblock')
    .flatMap(x => x.args)
}
