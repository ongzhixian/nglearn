import { createReducer, on } from '@ngrx/store';
import { dataReceived } from './travel-info.actions';
import { displayQuestion } from './travel-app.actions';
import { PolarQuestion } from '../models/PolarQuestion';

import { navigateToPage, saveNavigationHistory } from './travel-app.actions';

// export const initialState: PolarQuestion = {
//     html: '<span style=font-size:20pt;>Hey,</span><br/>Would you like to travel?',
//     yesRoute: '/page1',
//     noRoute: '/home',
//     nextEvent: 'next question please'
// };

export const initialState: PolarQuestion = {
    html: 'Do you have a specific country in mind?',
    yesRoute: '/country-search',
    noRoute: '/home',
    nextEvent: 'next question please'
};

export const polarQuestionReducer = createReducer(
    initialState,
    on(displayQuestion, (state, { question }) => question)
);

export const previousRoutePathReducer = createReducer(
    "",
    on(navigateToPage, (state, evt) => `/${evt.src}`)
);

export const navigationHistoryReducer = createReducer(
    [] as string[],
    on(saveNavigationHistory, (state, evt) => [...state, evt.dst])
);
