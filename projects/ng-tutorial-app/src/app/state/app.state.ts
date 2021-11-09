// import { Book } from '../book-list/books.model';

import { Book } from "../components/book-list/book.model";

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}