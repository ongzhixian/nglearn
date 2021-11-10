import { Injectable } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// import { MoviesService } from './movies.service';
import { GoogleBooksService } from '../services/google-books.service';
import { LogService } from '../services/log.service';
import { retrievedBookList } from './google-books.actions';

@Injectable()
export class GoogleBookApiEffects {

    constructor(
        private actions$: Actions,
        private googleBookService: GoogleBooksService,
        private log : LogService
    ) { }

    // '[Book List/API] Retrieve Books Success',
    loadGoogleBooks$ = createEffect(() => this.actions$.pipe(
        ofType('[Book List/API] Retrieve Books'),
        mergeMap(() => this.googleBookService.getBooks('david eddings')
            .pipe(
                tap(_ => this.log.add(`In effects ${_}`)),
                // success
                //map(googleBooks => ({ type: '[Book List/API] Retrieve Books Success', payload: googleBooks })),
                map(googleBooks => {
                    debugger;
                    // return retrievedBookList({books: googleBooks});
                    return ({ type: '[Book List/API] Retrieve Books Success', books: googleBooks })
                }),
                
                // map((items: any[]) => {
                //     return bookActions.loadSuccessAction({ items })
                // }),
                
                // catchError(() => EMPTY)
                catchError(() => of({ type: '[Google Books API] Get Books Error' }))
            ))
    ));

}