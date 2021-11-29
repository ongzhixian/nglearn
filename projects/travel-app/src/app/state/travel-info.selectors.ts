import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TravelInfo } from '../models/TravelInfo';

export const selectTravelInfo = createFeatureSelector<TravelInfo>('selectedTravelInfo');
