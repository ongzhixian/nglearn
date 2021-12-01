import { createAction, props } from '@ngrx/store';
import { PolarQuestion } from '../models/PolarQuestion';


export const enum EventType {
    DISPLAY_QUESTION    = '[Travel App] Display Question',
    // DISPLAY_INTRO       = '[Travel App] Display Intro',
    // ASK_DESTINATION     = '[Travel App] Ask Destination',
    // ASK_RESIDENCY       = '[Travel App] Ask Residency',

    // FIND_COUNTRIES = '[Country List] Find Countries',
    // DATA_RECEIVED = '[Country List] Data Received',
    // DATA_RETRIEVAL_ERROR = '[Country List] Data Retrieval Error'
}

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
