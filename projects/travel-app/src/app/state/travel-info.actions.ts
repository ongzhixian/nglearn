import { createAction, props } from '@ngrx/store';
import { Country } from '../models/Country';
import { TravelInfo } from '../models/TravelInfo';

export const enum EventType {
    GET_COUNTRY_TRAVEL_INFO = '[Travel Info] Get Country Travel Info',
    DATA_RECEIVED = '[Travel Info] Data Received',
    DATA_RETRIEVAL_ERROR = '[Travel Info] Data Retrieval Error'
}

export const getCountryTravelInfo = createAction(
    EventType.GET_COUNTRY_TRAVEL_INFO,
    props<{ code: string }>()
);

export const dataReceived = createAction(
    EventType.DATA_RECEIVED,
    props<{ travelInfo: TravelInfo }>()
);
