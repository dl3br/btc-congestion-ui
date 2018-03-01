import { Injectable } from '@angular/core';
import { Client } from 'thruway.js'
import { config } from '../../config'
@Injectable()
export class WampConnectorService {
  wamp: Client
  constructor() { }

  getWamp = () =>
    this.wamp === undefined
      ? this.wamp = new Client(config.wamp.url, config.wamp.realm, { role: config.wamp.user }
      )
      : this.wamp
}
