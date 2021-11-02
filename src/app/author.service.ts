import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Author } from './models/author';
import { AUTHORS } from './data/mock-authors';

import { MessageService } from './message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private messageService : MessageService) { }

  // getAuthors() : Author[] {
  //   return AUTHORS;
  // };

  getAuthors() : Observable<Author[]> {
    const heroes = of(AUTHORS);
    this.messageService.add('AuthorService: fetched authors');
    return heroes;
  }
}
