import { ActivatedRouteSnapshot } from '@angular/router';
import { createFeatureSelector } from '@ngrx/store';
import { PolarQuestion } from '../models/PolarQuestion';

export const selectQuestion = createFeatureSelector<PolarQuestion>('polarQuestion');

export const selectPreviousRoute = createFeatureSelector<string>('previousRoute');

export const selectNavigationHistory = createFeatureSelector<string[]>('navigationHistory');
