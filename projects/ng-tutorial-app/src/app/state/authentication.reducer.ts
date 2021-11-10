import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './clicky.actions';
import { login, loginFailure, logout } from './authentication.actions';

import { AppState } from './app.state';
import { AppUser } from "../models/app-user";

export const initialState: AppUser = {
    username: "",
    isAuthenticated: false
};

//set the initial state with localStorage
// export const initialState: AppState = {

//     // isAuthenticated: localStorage.getItem('token')!==null,
//     // user: {
//     //         token: localStorage.getItem('token'),
//     //         email: localStorage.getItem('email')
//     //       },
//     // errorMessage: null
//     loggedInUser : {
//         username: "",
//         isAuthenticated: false
//     },
//     errorMessage : ""
// };
  

export const appUserReducer = createReducer(
    initialState,
    on(login, (state, { username, password }) => {
        return {
            ...state,
            username: username,
            isAuthenticated: true
        };
    }),
    on(logout, (state) => {
        return {
            ...state,
            username: "",
            isAuthenticated: false
        };
    }),
);
