import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './store/reducers/location.reducer';
import { LocationEffects } from './store/effects/location.effect';
import { EffectsModule } from '@ngrx/effects';
import { LocationListComponent } from './components/location-list/location-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LocationDialogComponent } from './components/location-dialog/location-dialog.component';
import { DeleteLocationDialogComponent } from './components/delete-location-dialog/delete-location-dialog.component';
const routes: Routes = [
  {
    path: '',
    component: LocationListComponent,
  },
];

@NgModule({
  declarations: [LocationListComponent, LocationDialogComponent, DeleteLocationDialogComponent],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('locations', locationReducer),
    EffectsModule.forFeature([LocationEffects]),
    SharedModule,
  ],
})
export class LocationModule {}
