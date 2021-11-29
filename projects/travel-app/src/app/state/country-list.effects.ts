import { Injectable } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// import { MoviesService } from './movies.service';
import { CountryService } from '../services/country.service';
// import { LogService } from '../services/log.service';
// import { retrievedBookList } from './google-books.actions';
import { findCountries, EventType } from './country-list.actions';


@Injectable()
export class CountryApiEffects {

    constructor(
        private actions$: Actions,
        private countryService: CountryService
    ) { }

    loadCountryList$ = createEffect(() => this.actions$.pipe(
        ofType(findCountries),
        switchMap(action => this.countryService.getCountries('')
            .pipe(
                // tap(countries => console.log('Countries ONLOAD: ', countries)),
                map(countries => ({ type: EventType.DATA_RECEIVED, countries: countries })),
                catchError(error => of({ type: EventType.DATA_RETRIEVAL_ERROR }))
            )
        )
    ));
}

    // loadGoogleBooks$ = createEffect(() => this.actions$.pipe(
    //     ofType(EventType.FIND_COUNTRIES),
    //     switchMap((action) => this.countryService.getCountries('si').pipe(
    //         map(countryList => {
    //             return ({ type: EventType.DATA_RECEIVED, countries: countryList })
    //         }),
    //         catchError(() => of({ type: EventType.DATA_RETRIEVAL_ERROR }))
    //     )
    // ))

    // loadGoogleBooks$ = createEffect(() => this.actions$.pipe(
    //     ofType(),
    //     mergeMap(() => this.countryService.getCountries('a')).pipe(
    //         tap(_ => this.log.add(`In effects ${_}`)),
    //         map(googleBooks => {
    //                             return ({ type: '[Book List/API] Retrieve Books Success', books: googleBooks })
    //         }),
    //         catchError(() => of({ type: '[Google Books API] Get Books Error' }))
    //     )
    // ));


    // loadGoogleBooks$ = createEffect(() => this.actions$.pipe(
    //     ofType('[Book List/API] Retrieve Books'),
    //     mergeMap(() => this.googleBookService.getBooks('david eddings')
    //         .pipe(
    //             tap(_ => this.log.add(`In effects ${_}`)),
    //             // success
    //             //map(googleBooks => ({ type: '[Book List/API] Retrieve Books Success', payload: googleBooks })),
    //             map(googleBooks => {
    //                 // debugger;
    //                 // return retrievedBookList({books: googleBooks});
    //                 return ({ type: '[Book List/API] Retrieve Books Success', books: googleBooks })
    //             }),
                
    //             // map((items: any[]) => {
    //             //     return bookActions.loadSuccessAction({ items })
    //             // }),
                
    //             // catchError(() => EMPTY)
    //             catchError(() => of({ type: '[Google Books API] Get Books Error' }))
    //         ))
    // ));
