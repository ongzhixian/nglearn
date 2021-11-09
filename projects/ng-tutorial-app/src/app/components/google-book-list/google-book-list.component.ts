import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GoogleBook } from '../../models/google-book';

@Component({
  selector: 'app-google-book-list',
  templateUrl: './google-book-list.component.html',
  styleUrls: ['./google-book-list.component.css']
})
export class GoogleBookListComponent {
  @Input() books: ReadonlyArray<GoogleBook> | null = [];
  @Output() add = new EventEmitter<string>();
}
