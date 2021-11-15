import { TestBed } from '@angular/core/testing';

import { MySseService } from './my-sse.service';

describe('MySseService', () => {
  let service: MySseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
