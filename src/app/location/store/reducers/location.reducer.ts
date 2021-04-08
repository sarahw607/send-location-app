import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ISendLocation } from 'src/app/location/models/location.model';
import * as actions from '../actions/location.actions';

export interface LocationState extends EntityState<ISendLocation> {
  isLoading: boolean;
}

export const adapter: EntityAdapter<ISendLocation> = createEntityAdapter<ISendLocation>();

export const initialState = adapter.getInitialState({ isLoading: false });

export const locationReducer = createReducer(
  initialState,
  on(actions.loadLocations, (state) => {
    return { ...state, isLoading: true };
  }),
  on(actions.locationsLoaded, (state, { locations }) => {
    return adapter.setAll(locations, { ...state, isLoading: false });
  }),
  on(actions.upsertLocation, (state, { location }) => {
    return adapter.upsertOne(location, { ...state });
  }),
  on(actions.deleteLocation, (state, { id }) => {
    return adapter.removeOne(id, { ...state });
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();

export const isLoading = (state: LocationState): boolean => state.isLoading;
