import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { item, measureUnit } from '../interfaces/';

@Injectable({
  providedIn: 'root',
})
export class ItemsApiService {
  private BASE_URL: string = 'http://localhost:3000/';
  private URL_ITEMS: string = this.BASE_URL + 'items/';
  private URL_MEASURE_UNIT: string = this.BASE_URL + 'measureUnits/';

  constructor(private http: HttpClient) {}

  getItems(): Observable<item[]> {
    return this.http.get<item[]>(this.URL_ITEMS);
  }

  getMeasureUnit(): Observable<measureUnit[]> {
    return this.http.get<measureUnit[]>(this.URL_MEASURE_UNIT);
  }
}
