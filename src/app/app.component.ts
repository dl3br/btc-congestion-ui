import {
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import {
  MinFeeService,
  MinDiff,
} from './min-fee.service'
import { BtcUsdService } from './btc-usd.service'
import { Line, IChartistData } from 'chartist'
import * as ngchart from 'ng-chartist'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  minDiffs: MinDiff[]
  targetBlocks: number[]
  feeRates: number[]
  btcusd: number
  // type: ngchart.ChartType
  // data: IChartistData
  // options?: any

  constructor(private _minFee: MinFeeService, private _btcusd: BtcUsdService) { }

  ngOnInit() {
    this._minFee.minDiff$
      .subscribe(
      minDiff => { this.minDiffs = minDiff },
      console.error,
    )
    this._btcusd.btcusd$
      .subscribe(btcusd => this.btcusd = btcusd)
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
