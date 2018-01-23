import {
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import {
  MinFeeService,
  MinDiff,
} from './min-fee.service'
// import {} from 'lodash'
import { Line, IChartistData } from 'chartist'
import * as ngchart from 'ng-chartist'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: [`#values { font-size: 200%; font-family: monospace; }`],
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  minDiffs: MinDiff[]
  targetBlocks: number[]
  feeRates: number[]
  // type: ngchart.ChartType
  // data: IChartistData
  // options?: any

  constructor(private minFee: MinFeeService) { }

  ngOnInit() {
    this.minFee.minDiff$
      .subscribe(
      (minDiff) => {
        this.minDiffs = minDiff
      },
      console.error,
    )
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
