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

export const successfulLoginAction = createAction(
    '[User] Login Succeeded', 
    props<{ token: string }>()
);

export const loginSuccess = createAction(
    AuthenticationActionTypes.LOGIN_SUCCESS
);

export const loginFailure = createAction(
    AuthenticationActionTypes.LOGIN_FAILURE,
    props<{ message: string }>()
);


export const logout = createAction(
    AuthenticationActionTypes.LOGOUT
);
