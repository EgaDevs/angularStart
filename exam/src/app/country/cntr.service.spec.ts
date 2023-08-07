import { TestBed } from '@angular/core/testing';

import { CntrService } from './cntr.service';

describe('CntrService', () => {
  let service: CntrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CntrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
