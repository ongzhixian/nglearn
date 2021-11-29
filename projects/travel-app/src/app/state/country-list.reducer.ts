import { createReducer, on } from '@ngrx/store';
import { Country } from '../models/Country';
import { dataReceived } from './country-list.actions';

export const initialState: ReadonlyArray<Country> = [];

export const countryListReducer = createReducer(
    initialState,
    on(dataReceived, (state, { countries }) => countries)
);

// const _counterReducer = createReducer(
//     initialState,
//     on(increment, (state) => state + 1),
//     on(decrement, (state) => state - 1),
//     on(reset, (state) => 0)
// );

// export const initialState: ReadonlyArray<GoogleBook> = [];

// export const booksReducer = createReducer(
//   initialState,
//   on(retrievedBookList, (state, { books }) => {
//     // debugger;
//     return books;
//   })
// );

// export function counterReducer(state: any, action: any) {
//     return _counterReducer(state, action);
// }
