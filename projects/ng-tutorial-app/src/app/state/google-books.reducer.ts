import { createReducer, on } from '@ngrx/store';
import { GoogleBook } from '../models/google-book';
import { retrievedBookList } from './google-books.actions';

export const initialState: ReadonlyArray<GoogleBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => {
    debugger;
    return books;
  })
);