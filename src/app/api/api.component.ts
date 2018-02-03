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
      const fees$: Observable <MinDiff[]> =
        wamp.topic('com.fee.mindiff').flatMap(x => x.args)

      interface MinDiff {
        targetBlock: number
        feeRate: number
        timestamp: number
        date: string
        diff: number
        cumDiff: number
        score: number
      }
`
  constructor() { }

  ngOnInit() {
  }

}
