import { TestBed, inject } from '@angular/core/testing';

import { MinFeeService } from './min-fee.service';

describe('MinFeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinFeeService]
    });
  });

  it('should be created', inject([MinFeeService], (service: MinFeeService) => {
    expect(service).toBeTruthy();
  }));
});
