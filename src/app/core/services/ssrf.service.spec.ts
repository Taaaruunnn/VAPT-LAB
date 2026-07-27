import { TestBed } from '@angular/core/testing';

import { SsrfService } from './ssrf.service';

describe('SsrfService', () => {
  let service: SsrfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsrfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
