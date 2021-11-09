import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GoogleBook } from '../../models/google-book';

@Component({
  selector: 'app-google-book-collection',
  templateUrl: './google-book-collection.component.html',
  styleUrls: ['./google-book-collection.component.css']
})
export class GoogleBookCollectionComponent {

  @Input() books: Array<GoogleBook> | null = [];
  @Output() remove = new EventEmitter<string>();

  // constructor() { }

  // ngOnInit(): void {
  // }

}
