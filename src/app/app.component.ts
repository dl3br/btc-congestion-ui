import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  MinFeeService,
  MinDiff,
} from './min-fee.service'
import { BtcUsdService } from './btc-usd.service'
import { Line, IChartistData } from 'chartist'
import * as ngchart from 'ng-chartist'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  minDiffs: MinDiff[]
  btcusd: number
  minDiffSub: Subscription
  btcusdSub: Subscription
  twoInOneOutVSize = {
    segwit: 165,
    nonsegwit: 226
  }
  scores: number[]
  // type: ngchart.ChartType
  // data: IChartistData
  // options?: any

  constructor(private _minFee: MinFeeService, private _btcusd: BtcUsdService) { }

  ngOnInit() {
    this.minDiffSub = this._minFee.minDiff$
      .subscribe(
      minDiffs => { this.minDiffs = minDiffs },
      console.error
      )
    this.btcusdSub = this._btcusd.btcusd$
      .subscribe(
      btcusd => { this.btcusd = btcusd },
      console.error
      )
  }

  ngOnDestroy() {
    this.btcusdSub.unsubscribe()
    this.minDiffSub.unsubscribe()
  }

  // ngOnChanges() {
  //   if (this.minDiffs) {
  //     this.minDiffs = scores.map((x, i) => ({ ...this.minDiffs[i], score: x / maxScore }))
  //     console.dir(this.minDiffs)
  //   }
  // }

  translate = (targetBlock: number) => {
    const ceil = Math.ceil(targetBlock)
    switch (true) {
      case ceil - targetBlock === 0: return { time: ceil * 10, probability: 'low' }
      case ceil - targetBlock === 0.25: return { time: ceil * 10, probability: 'mid' }
      case ceil - targetBlock === 0.5: return { time: ceil * 10, probability: 'high' }
      default: return { targetBlock, probability: 'low' }
    }
  }


  // basicChart = () => {
  //   this.data = {
  //     labels: this.minDiffs.map(({ targetBlock }) => targetBlock),
  //     series: [this.minDiffs.map(({ feeRate }) => feeRate)],
  //   }

  //   return new Line('.ct-chart', this.data)
  // }

  round = (value: number, places: number = 4) =>
    +(Math.round(Number(value.toString() + 'e+' + places)) + 'e-' + places);
}
