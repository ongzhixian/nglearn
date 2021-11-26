import { createAction, props } from '@ngrx/store';
import { Country } from '../models/Country';

// export const ACTION_FIND_COUNTRIES = '[Country List] Find Countries';
// export const ACTION_RECEIVED_DATA = '[Country List] Received Data';

export const enum EventType {
    FIND_COUNTRIES = '[Country List] Find Countries',
    DATA_RECEIVED = '[Country List] Data Received'
}

export const findCountries = createAction(
    EventType.FIND_COUNTRIES,
    props<{ countries: Array<Country> }>()
);

export const dataReceived = createAction(
    EventType.DATA_RECEIVED,
    props<{ countries: Array<Country> }>()
);

// export const getAllCountries = createAction('[Country List] Get all countries');
// export const reset = createAction('[Counter Component] Reset');
