import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './clicky.actions';
import { login, logout } from './authentication.actions';

import { AppUser } from "../models/app-user";

export const initialState: AppUser = {
    username: "",
    isAuthenticated: false
};

export const appUserReducer = createReducer(
    initialState,
    on(login, (state, { username, password }) => {
        return {
            ...state,
            isAuthenticated: true
        };
    })
);