import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISendLocation } from '../models/location.model';

@Injectable({ providedIn: 'root' })
export class LocationService {
  constructor(private http: HttpClient) {}
  getLocations(): Observable<ISendLocation[]> {
    return this.http.get<ISendLocation[]>('assets/data/locations.json');
  }
}
