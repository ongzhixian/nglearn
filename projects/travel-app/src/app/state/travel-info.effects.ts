import { Injectable } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// import { MoviesService } from './movies.service';
// import { CountryService } from '../services/country.service';
// import { LogService } from '../services/log.service';
// import { retrievedBookList } from './google-books.actions';
// import { findCountries, EventType } from './country-list.actions';

import { getCountryTravelInfo, EventType } from './travel-info.actions';
import { TravelInfoService } from '../services/travel-info.service';

@Injectable()
export class TravelInfoApiEffects {

    constructor(
        private actions$: Actions,
        private travelInfoService: TravelInfoService
    ) { }

    loadCountryList$ = createEffect(() => this.actions$.pipe(
        ofType(getCountryTravelInfo),
        switchMap(action => this.travelInfoService.getTravelInfo(action.code)
            .pipe(
                tap(travelInfo => console.log('[TravelInfoApiEffects] TravelInfo retrieved', travelInfo)),
                map(travelInfo => ({ type: EventType.DATA_RECEIVED, travelInfo: travelInfo })),
                catchError(error => of({ type: EventType.DATA_RETRIEVAL_ERROR }))
            )
        )
    ));
}