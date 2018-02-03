import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  MinFeeService,
  MinDiff,
} from '../min-fee.service'
import { BtcUsdService } from '../btc-usd.service'
import { BlockDetectorService } from '../block-detector.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'btc-component',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.css']
})


export class BtcComponent implements OnInit, OnDestroy{
  minDiffs: MinDiff[]
  btcusd: number
  minDiffSub: Subscription
  btcusdSub: Subscription
  minsFromLastBlockSub: Subscription
  minsFromLastBlock: number
  twoInOneOutVSize = {
    segwit: 165,
    nonsegwit: 226
  }
  scores: number[]
  lastUpdatedCounterSub: Subscription
  lastUpdatedCounter: number

  constructor(
    private _minFee: MinFeeService,
    private _btcusd: BtcUsdService,
    private _blockDetector: BlockDetectorService,
  ) { }

  ngOnInit() {
    this.minDiffSub = this._minFee.minDiff$
      .subscribe(
      minDiffs => { this.minDiffs = minDiffs },
      console.error
      )
    this.lastUpdatedCounterSub = this._minFee.lastUpdatedCounter$
      .subscribe(
      xlastUpdatedCounter => { this.lastUpdatedCounter = xlastUpdatedCounter },
      console.error
      )
    this.btcusdSub = this._btcusd.btcusd$
      .subscribe(
      btcusd => { this.btcusd = btcusd },
      console.error
      )

    this.minsFromLastBlockSub = this._blockDetector.minsFromLastBlock$
      .subscribe(
      mins => { this.minsFromLastBlock = mins },
      console.error
      )
  }

  ngOnDestroy() {
    this.btcusdSub.unsubscribe()
    this.minDiffSub.unsubscribe()
    this.minsFromLastBlockSub.unsubscribe()
  }

  translate = (targetBlock: number) => {
    const ceil = Math.ceil(targetBlock)
    switch (true) {
      case ceil - targetBlock === 0: return { time: ceil * 10, probability: 'low' }
      case ceil - targetBlock === 0.25: return { time: ceil * 10, probability: 'mid' }
      case ceil - targetBlock === 0.5: return { time: ceil * 10, probability: 'high' }
      default: return { targetBlock, probability: 'low' }
    }
  }

  round = (value: number, places: number = 4) =>
    (+(Math.round(Number(value.toString() + 'e+' + places)) + 'e-' + places))
      .toFixed(places)
}
