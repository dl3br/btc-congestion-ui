import { TestBed, inject } from '@angular/core/testing';

import { BtcUsdService } from './btc-usd.service';

describe('BtcUsdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtcUsdService]
    });
  });

  it('should be created', inject([BtcUsdService], (service: BtcUsdService) => {
    expect(service).toBeTruthy();
  }));
});
