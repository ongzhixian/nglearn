import { createAction, props } from '@ngrx/store';
import { PolarQuestion } from '../models/PolarQuestion';
import { ActivatedRouteSnapshot } from '@angular/router';



export const enum EventType {
    NAVIGATE_TO_PAGE            = '[Travel App] Navigate To Page',       
    DISPLAY_TRAVEL_ALONE_PAGE   = '[Travel App] Display Travel Alone Page',
    DISPLAY_QUESTION            = '[Travel App] Display Question',

    SAVE_NAVIGATION_HISTORY     = '[Travel App] Save Navigation History'
    
    // DISPLAY_INTRO       = '[Travel App] Display Intro',
    // ASK_DESTINATION     = '[Travel App] Ask Destination',
    // ASK_RESIDENCY       = '[Travel App] Ask Residency',

    // FIND_COUNTRIES = '[Country List] Find Countries',
    // DATA_RECEIVED = '[Country List] Data Received',
    // DATA_RETRIEVAL_ERROR = '[Country List] Data Retrieval Error'
}

export const navigateToPage = createAction(
    EventType.NAVIGATE_TO_PAGE,
    props<{ src: string, dst: string }>()
);

export const saveNavigationHistory = createAction(
    EventType.SAVE_NAVIGATION_HISTORY,
    props<{ dst: string }>()
);



export const displayQuestion = createAction(
    EventType.DISPLAY_QUESTION,
    props<{ question: PolarQuestion }>()
);


// export const findCountries = createAction(
//     EventType.FIND_COUNTRIES,
//     props<{ startsWith: string }>()
// );

// export const dataReceived = createAction(
//     EventType.DATA_RECEIVED,
//     props<{ countries: Array<Country> }>()
// );
