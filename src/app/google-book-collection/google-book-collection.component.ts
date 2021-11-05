import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-google-book-collection',
  templateUrl: './google-book-collection.component.html',
  styleUrls: ['./google-book-collection.component.css']
})
export class GoogleBookCollectionComponent {

  @Input() books: ReadonlyArray<Book> = [];
  
  @Output() remove = new EventEmitter<string>();

}
