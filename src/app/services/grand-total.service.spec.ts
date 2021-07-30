import { TestBed } from '@angular/core/testing';

import { GrandTotalService } from './grand-total.service';

describe('GrandTotalService', () => {
  let service: GrandTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrandTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
