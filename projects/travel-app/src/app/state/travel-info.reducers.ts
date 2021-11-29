import { createReducer, on } from '@ngrx/store';
import { Country } from '../models/Country';
import { TravelInfo } from '../models/TravelInfo';
import { dataReceived } from './travel-info.actions';

export const initialState: TravelInfo = {} as TravelInfo;

export const travelInfoReducer = createReducer(
    initialState,
    on(dataReceived, (state, { travelInfo }) => travelInfo)
);
