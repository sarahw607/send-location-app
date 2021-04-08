import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { ISendLocation } from 'src/app/location/models/location.model';

// Load Locations

export const loadLocations = createAction('[Locations] Load');

export const locationsLoaded = createAction(
  '[Locations] Loaded',
  props<{ locations: ISendLocation[] }>()
);

export const upsertLocation = createAction(
  '[Location] Upsert',
  props<{ location: ISendLocation }>()
);

export const deleteLocation = createAction(
  '[Location] Updated',
  props<{ id: number }>()
);
