import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Store } from '@ngrx/store';

import { AppState } from '../../state/app.state';
import { selectBookCollection, selectBooks } from '../../state/google-books.selector';
import { retrievedBookList, addBook, removeBook } from '../../state/google-books.actions';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'app-dummy-page2',
  templateUrl: './dummy-page2.component.html',
  styleUrls: ['./dummy-page2.component.css']
})
export class DummyPage2Component implements OnInit {

  books$ = this.store.select(selectBooks);
  
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private logService : LogService,
    private booksService: GoogleBooksService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.logService.add("In DummyPage2Component OnInit");
    this.booksService
    .getBooks()
    .subscribe(
      (books) => {
        this.store.dispatch(retrievedBookList({ books }));
        // debugger;
      }
    );
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
