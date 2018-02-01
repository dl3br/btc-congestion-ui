import { TestBed, inject } from '@angular/core/testing';

import { BlockDetectorService } from './block-detector.service';

describe('BlockDetectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockDetectorService]
    });
  });

  it('should be created', inject([BlockDetectorService], (service: BlockDetectorService) => {
    expect(service).toBeTruthy();
  }));
});
