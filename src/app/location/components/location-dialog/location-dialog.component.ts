import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISendLocation } from '../../models/location.model';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.scss'],
})
export class LocationDialogComponent {
  locationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISendLocation
  ) {}

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      lat: [this.data ? this.data.lat : '', [Validators.required]],
      lon: [this.data ? this.data.lon : '', [Validators.required]],
      address_line_1: [this.data ? this.data.address_line_1 : ''],
      city: [this.data ? this.data.city : ''],
      country: [this.data ? this.data.country : ''],
      property_value: [this.data ? this.data.property_value : ''],
      business_interruption_value: [
        this.data ? this.data.business_interruption_value : '',
      ],
    });
  }

  onYesClick() {
    if (this.locationForm.valid) {
      this.dialogRef.close(this.locationForm.value);
    } else {
      // TODO form error messages
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
