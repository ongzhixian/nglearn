import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Country } from '../models/Country';

export const selectCountries = createFeatureSelector<Array<Country>>('countries');

// export const selectCollectionState = createFeatureSelector<Array<Country>>('collection');

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection.map((id) => books.find((book) => book.id === id));
//   }
// );


// export const isDefinedGeneric = <T>(x: T | undefined | null): x is T => {
//     return x !== null && x !== undefined;
// };

// export const selectCountry = createSelector(
//     selectCountries,
//     (countries: Array<Country>) => {
//         // return collection.map((id) => books.find((book) => book.id === id)).filter(isDefinedGeneric);
//         return countries;
//     }
// );