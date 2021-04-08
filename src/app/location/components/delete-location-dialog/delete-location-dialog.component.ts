import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-location-dialog',
  templateUrl: './delete-location-dialog.component.html',
  styleUrls: ['./delete-location-dialog.component.scss'],
})
export class DeleteLocationDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteLocationDialogComponent>) {}

  onYesClick() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
