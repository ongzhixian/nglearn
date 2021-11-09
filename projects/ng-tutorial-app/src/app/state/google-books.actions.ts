import { createAction, props } from '@ngrx/store';
import { GoogleBook } from '../models/google-book';

// export const addBook = createAction(
//   '[Book List] Add Book',
//   props<{ bookId: string }>()
// );

// export const removeBook = createAction(
//   '[Book Collection] Remove Book',
//   props<{ bookId: string }>()
// );

// export const listGoogleBooks = createAction(
//   '[Book List/API] Books retrieved',
//   props<{ googleBooks: Array<GoogleBook> }>()
// );


export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);
 
export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);
 
export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: Array<GoogleBook> }>()
);