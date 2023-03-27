import { TestBed } from '@angular/core/testing';

import { BeerSericeService } from './beer-serice.service';

describe('BeerSericeService', () => {
  let service: BeerSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
