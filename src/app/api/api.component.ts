import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  code = `
import { Client } from 'thruway.js'
const wamp = new Client('ws://159.100.247.219:8080/ws', 'realm1')
const fees$: Observable &ltBestDeals&gt =
  wamp.topic('com.fee.bestdeals').flatMap(x => x.args)

// then subscribe
fees$.subscribe(console.log, console.error)
`

  objectType = `
interface BestDeals {
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
