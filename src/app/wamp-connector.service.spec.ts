import { TestBed, inject } from '@angular/core/testing';

import { WampConnectorService } from './wamp-connector.service';

describe('WampConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WampConnectorService]
    });
  });

  it('should be created', inject([WampConnectorService], (service: WampConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
