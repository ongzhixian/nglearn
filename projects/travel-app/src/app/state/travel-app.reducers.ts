import { createReducer, on } from '@ngrx/store';
import { dataReceived } from './travel-info.actions';
import { displayQuestion } from './travel-app.actions';
import { PolarQuestion } from '../models/PolarQuestion';

export const initialState: PolarQuestion = {
    html: '<span style=font-size:20pt;>Hey,</span><br/>Would you like to travel?',
    yesRoute: '/page1',
    noRoute: '/home',
    nextEvent: 'next question please'
};

export const polarQuestionReducer = createReducer(
    initialState,
    on(displayQuestion, (state, { question }) => question)
);
