import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import * as actions from '../actions';

import { LocationService } from 'src/app/location/services/location.service';

@Injectable()
export class LocationEffects {
  locationsLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadLocations),
      switchMap(() => this.locationService.getLocations()),
      map((locations) => actions.locationsLoaded({ locations }))
    )
  );

  constructor(
    private actions$: Actions,
    private locationService: LocationService
  ) {}
}
