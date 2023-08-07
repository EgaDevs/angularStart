import { TestBed } from '@angular/core/testing';

import { DictServiceService } from './dict-service.service';

describe('DictServiceService', () => {
  let service: DictServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
