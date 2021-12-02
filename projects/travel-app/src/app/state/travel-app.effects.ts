import { Injectable } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ActivatedRoute, Router } from '@angular/router';

// import { getCountryTravelInfo, EventType } from './travel-info.actions';
import { navigateToPage, EventType } from './travel-app.actions';

@Injectable()
export class TravelAppEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private route: ActivatedRoute
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

    // Navigation effects

    displayTravelAlonePage$ = createEffect(() => this.actions$.pipe(
        ofType(navigateToPage),
        // tap(_ => console.log(this.route)),
        tap((e) => this.router.navigate([`/${e.dst}`])),
        
    ), { dispatch: false });

}