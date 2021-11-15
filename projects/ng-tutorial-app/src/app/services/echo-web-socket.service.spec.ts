import { TestBed } from '@angular/core/testing';

import { EchoWebSocketService } from './echo-web-socket.service';

describe('EchoWebSocketService', () => {
  let service: EchoWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchoWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
