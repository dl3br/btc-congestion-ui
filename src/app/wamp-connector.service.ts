import { Injectable } from '@angular/core';
import { Client } from 'thruway.js'

@Injectable()
export class WampConnectorService {
  wamp: Client
  constructor() { }

  getWamp = () =>
    this.wamp === undefined
      ? this.wamp = new Client('ws://159.100.247.219:8080/ws', 'realm1')
      : this.wamp
}
