import { createReducer, on } from '@ngrx/store';
import { loginFailure } from './authentication.actions';

export const initialState: string = "";

export const errorMessageReducer = createReducer(
    initialState,
    on(loginFailure, () => {
        return "Invalid credentials.";
    })
);