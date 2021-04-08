import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { ISendLocation } from '../../models/location.model';
import {
  deleteLocation,
  loadLocations,
  upsertLocation,
} from '../../store/actions';
import {
  getAllLocationIds,
  getAllLocations,
  getIsLoading,
} from '../../store/selectors/location.selectors';
import { DeleteLocationDialogComponent } from '../delete-location-dialog/delete-location-dialog.component';
import { LocationDialogComponent } from '../location-dialog/location-dialog.component';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locations$: Observable<ISendLocation[]>;
  isLoading$: Observable<boolean>;
  displayedColumns: string[] = [
    'lat',
    'lon',
    'address_line_1',
    'city',
    'country',
    'property_value',
    'business_interruption_value',
    'actions',
  ];
  // hack for easiest way to generate id for Add Location for testing purposes
  nextId = 1001;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}
  ngOnInit(): void {
    // TODO do this in effect on navigation
    this.store.dispatch(loadLocations());
    this.locations$ = this.store.select(getAllLocations);
    this.isLoading$ = this.store.select(getIsLoading);
  }

  upsertLocation(location: ISendLocation): void {
    this.store.dispatch(upsertLocation({ location }));
  }

  openUpsertDialog(location?: ISendLocation): void {
    const dialogRef = this.dialog.open(LocationDialogComponent, {
      width: '500px',
      data: location,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(
          upsertLocation({
            // location: { ...result, ...(location && { id: location.id }) },
            location: { ...result, id: location ? location.id : this.nextId },
          })
        );
        this.nextId += 1;
      }
    });
  }

  onDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteLocationDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(deleteLocation({ id }));
      }
    });
  }
}
