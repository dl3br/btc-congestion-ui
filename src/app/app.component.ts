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
  // type: ngchart.ChartType
  // data: IChartistData
  // options?: any

  constructor(private _minFee: MinFeeService, private _btcusd: BtcUsdService) { }

  ngOnInit() {
    this.minDiffSub = this._minFee.minDiff$
      .subscribe(
      minDiff => { this.minDiffs = minDiff },
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

  translate = (targetBlock: number) => {
    const dictionary = {
      [0.5]: [10, 'high'],
      [0.75]: [10, 'mid'],
      [1]: [10, 'low'],
      [1.5]: [20, 'high'],
      [1.75]: [20, 'mid'],
      [2]: [20, 'low']
    }
    return targetBlock <= 2
      ? dictionary[targetBlock]
      : [(targetBlock * 10).toString(), 'low']
  }

  // ngOnChanges() {
  //   if (this.minDiffs) this.basicChart()
  // }

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
