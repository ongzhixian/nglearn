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

// export enum ActionTypes {
//   LOAD_BOOK_REQUEST = '[Book] Load Book Request',
//   LOAD_BOOK_FAILURE = '[Book] Load Book Failure',
//   LOAD_BOOK_SUCCESS = '[Book] Load Book Success',
 
//   LOAD_REQUEST = '[Book] Load Request',
//   LOAD_FAILURE = '[Book] Load Failure',
//   LOAD_SUCCESS = '[Book] Load Success',
 
//   SAVE_REQUEST = '[Book] Save',
//   SAVE_FAILURE = '[Book] Save Failure',
//   SAVE_SUCCESS = '[Book] Save Success',
 
//   UPDATE_REQUEST = '[Book] Update',
//   UPDATE_FAILURE = '[Book] Update Failure',
//   UPDATE_SUCCESS = '[Book] Update Success',
 
//   DELETE_REQUEST = '[Book] Delete',
//   DELETE_FAILURE = '[Book] Delete Failure',
//   DELETE_SUCCESS = '[Book] Delete Success'
// };


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

export const getBookList = createAction(
  '[Book List/API] Retrieve Books'
);