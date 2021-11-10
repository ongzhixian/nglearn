import { createAction, props } from '@ngrx/store';

export enum AuthenticationActionTypes {
    LOGIN = '[Login Component] Login',
    LOGIN_SUCCESS = '[Login Component] Login Success',
    LOGIN_FAILURE = '[Login Component] Login Failure',    
    LOGOUT          = '[Logout Component] Logout',
    LOGOUT_SUCCESS  = '[Logout Component] Logout Success',
    LOGOUT_FAILURE  = '[Logout Component] Logout Failure'
}

export const login = createAction(
    AuthenticationActionTypes.LOGIN,
    props<{
        username: string;
        password: string
    }>()
);

export const logout = createAction(
    AuthenticationActionTypes.LOGOUT
);
