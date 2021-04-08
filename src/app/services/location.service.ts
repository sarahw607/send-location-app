import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SendLocation } from '../models/location.model';

@Injectable({ providedIn: 'root' })
export class LocationService {
  constructor(private http: HttpClient) {}
  getLocations(): Observable<SendLocation[]> {
    return this.http.get<SendLocation[]>('assets/data/locations.json');
  }
}
