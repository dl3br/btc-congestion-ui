import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  url = 'fees.truelevel.io'
  // url = '159.100.247.219'
  codeTS = `
import { Client } from 'thruway.js'
const wamp = new Client('ws://${this.url}:8080/ws', 'realm1')
const fees$: Observable &ltDeals&gt =
  wamp.topic('com.fee.v1.btc.deals').flatMap(x => x.args)

// then subscribe
fees$.subscribe(console.log, console.error) // these are the callbacks

interface Deals {
  targetBlock: number
  feeRate: number
  date: string
  score: number
}[]
`
  codeJS = `
const Thruway = require('thruway.js')
const wamp = new Thruway.Client('ws://${this.url}:8080/ws', 'realm1')
const fees$ =
  wamp.topic('com.fee.v1.btc.deals').flatMap(x => x.args)

// then subscribe
fees$.subscribe(console.log, console.error)
`

  objectType = `{
  targetBlock: number
  feeRate: number
  date: string
  score: number
}[]
`
  constructor() { }

  ngOnInit() {
  }

}
