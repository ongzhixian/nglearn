import { TestBed } from '@angular/core/testing';

import { MockHeroesApiService } from './mock-heroes-api.service';

describe('MockHeroesApiService', () => {
  let service: MockHeroesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHeroesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
