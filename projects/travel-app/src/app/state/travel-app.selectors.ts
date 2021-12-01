import { createFeatureSelector } from '@ngrx/store';
import { PolarQuestion } from '../models/PolarQuestion';

export const selectQuestion = createFeatureSelector<PolarQuestion>('polarQuestion');
