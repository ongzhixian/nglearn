import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppUser } from '../models/app-user';
import { AppState } from './app.state';

// Pick out specific data store from AppState

// This syntax is deprecated.
// export const selectFeature = createFeatureSelector<AppState, AppUser>('loggedInUser');

// Not sure about if this syntax is valid?
// export const selectLoggedInUser = (state: AppState) => state.loggedInUser;

// createFeatureSelector is a selector used to query the state; this seems to be the recommended way (for now)

// Pick out errorMessage data from AppState
export const selectErrorMessage = (state: AppState) => state.errorMessage;


// 
export const errorMessage = createSelector(
    selectErrorMessage,
    (state: string) => state
);
