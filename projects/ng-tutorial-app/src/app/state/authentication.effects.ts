import { Injectable } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { tap, switchMap, map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// import { MoviesService } from './movies.service';
import { LogService } from '../services/log.service';
import { GoogleBooksService } from '../services/google-books.service';
import { retrievedBookList } from './google-books.actions';

import { login, loginSuccess, AuthenticationActionTypes } from './authentication.actions';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthenticationEffects {

    returnUrl : string;

    constructor(
        private actions$: Actions,
        private googleBookService: GoogleBooksService,
        private authenticationService: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute,
        private log: LogService
    ) { 
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    validateCredentials$ = createEffect(() => this.actions$.pipe(
        ofType(login), // Ya! New style uses the type directly!
        tap(action => this.log.add(`Tapping ${action.username}`)),
        switchMap(action => {
            return this.authenticationService.validateCredentials(action.username, action.password).pipe(
                tap(_ => this.log.add(`In effects ${_}`)),
                map(result => {
                    if (result)
                        return ({ type: AuthenticationActionTypes.LOGIN_SUCCESS });
                    return ({ type: AuthenticationActionTypes.LOGIN_FAILURE, message: "Invalid credentials." });
                }),
                catchError(() => of({ type: '[Google Books API] Get Books Error' }))
            )

            return this.googleBookService.getBooks('david eddings').pipe(
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
            )
        })
    ));

    successLogin$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccess),
        tap(_ => this.router.navigate([this.returnUrl]))
    ), 
    { 
        dispatch: false // This is important!
    });


    // loginNavigate$ = createEffect(() => this.actions$.pipe(
    //     ofType(usuariosActions.loginUsuarioSuccess),
    //     tap(() => {
    //         console.log('iniciando la navegacion');

    //         this.router.navigate(['/']);
    //     })
    // ), { dispatch: false }
    // );
}