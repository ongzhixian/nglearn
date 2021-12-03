import { Injectable } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { tap, map, switchMap, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

// import { getCountryTravelInfo, EventType } from './travel-info.actions';
import { navigateToPage, navigateToPrevious, EventType } from './travel-app.actions';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
import { selectNavigationHistory } from './travel-app.selectors';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class TravelAppEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<AppState>
    ) { }

    // loadCountryList$ = createEffect(() => this.actions$.pipe(
    //     ofType(getCountryTravelInfo),
    //     switchMap(action => this.travelInfoService.getTravelInfo(action.code)
    //         .pipe(
    //             tap(travelInfo => console.log('[TravelInfoApiEffects] TravelInfo retrieved', travelInfo)),
    //             map(travelInfo => ({ type: EventType.DATA_RECEIVED, travelInfo: travelInfo })),
    //             catchError(error => of({ type: EventType.DATA_RETRIEVAL_ERROR }))
    //         )
    //     )
    // ));

    // Navigation history tracking effects

    navigationHistory$ = createEffect(() => this.actions$.pipe(
        ofType(navigateToPage),
        map(action => ({ type: EventType.SAVE_NAVIGATION_HISTORY, dst: action.dst }))
    ));

    // Navigation effects

    navigate$ = createEffect(() => this.actions$.pipe(
        ofType(navigateToPage),
        // tap((e) => console.info("Navigate path:", this.route.snapshot.url[0].path)),
        tap((e) => this.router.navigate([`/${e.dst}`])),
    ), { dispatch: false });

    navigateToPrevious$ = createEffect(() => this.actions$.pipe(
        ofType(navigateToPrevious),
        withLatestFrom(this.store.select(selectNavigationHistory)),
        map((e) => {
            let destinationPath: string = "";
            let history = e[1];
            
            if (history.length > 0) {
                destinationPath = history[history.length - 1];
            }
            
            return ({ type: EventType.SAVE_NAVIGATION_HISTORY, dst: destinationPath });
            
            debugger;
            // if (e.length > 0) {
            //     destinationPath = e[e.length - 1];.
            // }  
            // console.info("Previous is")
            // this.router.navigate([`/${e.dst}`])
        })
    ), { dispatch: false });

}