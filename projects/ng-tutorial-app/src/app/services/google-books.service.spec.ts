import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GoogleBooksService } from './google-books.service';

describe('GoogleBooksService', () => {
  let service: GoogleBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(GoogleBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
