import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-google-book-list',
  templateUrl: './google-book-list.component.html',
  styleUrls: ['./google-book-list.component.css']
})
export class GoogleBookListComponent {

  @Input() books: ReadonlyArray<Book> = [];

  @Output() add = new EventEmitter<string>();
}
