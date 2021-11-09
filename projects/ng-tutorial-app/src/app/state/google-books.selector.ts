// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { GoogleBook } from '../models/google-book';

// export const selectBooks = createFeatureSelector<Array<GoogleBook>>('books');
 
// export const selectCollectionState = createFeatureSelector<Array<string>>('collection');
 
// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection.map((id) => books.find((book) => book.id === id));
//   }
// );


// import { isDefined } from '@angular/compiler/src/util';
// // import { Book } from '@app/book-list/books.model';
// // import { AppState } from '@app/state/app.state';
// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { GoogleBook } from '../models/google-book';
// import { AppState } from './app.state';

// export const selectBooks = createSelector(
//   (state: AppState) => state.books,
//   (books: ReadonlyArray<GoogleBook>) => books
// );

// export const selectCollectionState = createFeatureSelector<Array<string>>("collection");

// export const isDefinedGeneric = <T>(x: T | undefined | null): x is T => {
//   return x !== null && x !== undefined;
// };

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books: ReadonlyArray<GoogleBook>, collection: ReadonlyArray<string>) => {
//     return collection.map((id) => books.find((book) => book.id === id)).filter(isDefinedGeneric);
//   }
// );

import { createSelector, createFeatureSelector } from '@ngrx/store';

import { GoogleBook } from '../models/google-book';

export const selectBooks = createFeatureSelector<Array<GoogleBook>>('books');

export const selectCollectionState = createFeatureSelector<Array<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);