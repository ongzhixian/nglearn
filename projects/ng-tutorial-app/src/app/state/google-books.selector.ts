
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { GoogleBook } from '../models/google-book';

export const selectBooks = createFeatureSelector<Array<GoogleBook>>('books');

export const selectCollectionState = createFeatureSelector<Array<string>>('collection');

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection.map((id) => books.find((book) => book.id === id));
//   }
// );


export const isDefinedGeneric = <T>(x: T | undefined | null): x is T => {
  return x !== null && x !== undefined;
};

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: ReadonlyArray<GoogleBook>, collection: ReadonlyArray<string>) => {
    return collection.map((id) => books.find((book) => book.id === id)).filter(isDefinedGeneric);
  }
);