import { createSelector, createFeatureSelector, select } from '@ngrx/store';
import {
  LocationState,
  selectAll,
  selectIds,
  isLoading,
} from '../reducers/location.reducer';

export const locationFeatureSelector = createFeatureSelector<LocationState>(
  'locations'
);

export const getAllLocations = createSelector(
  locationFeatureSelector,
  selectAll
);

export const getAllLocationIds = createSelector(
  locationFeatureSelector,
  selectIds
);

export const getIsLoading = createSelector(locationFeatureSelector, isLoading);
