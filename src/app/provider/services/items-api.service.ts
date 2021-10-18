import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { item, measureUnit } from '../interfaces/';
import { ProviderApiService } from './provider-api.service';

type id = number | undefined | string | null;

@Injectable({
  providedIn: 'root',
})
export class ItemsApiService {
  private BASE_URL: string = 'http://localhost:3000/';
  private URL_ITEMS: string = this.BASE_URL + 'items/';
  private URL_MEASURE_UNIT: string = this.BASE_URL + 'measureUnits/';

  constructor(private http: HttpClient, private service: ProviderApiService) {}

  getItems(): Observable<item[]> {
    return this.http.get<item[]>(this.URL_ITEMS);
  }

  getMeasureUnit(): Observable<measureUnit[]> {
    return this.http.get<measureUnit[]>(this.URL_MEASURE_UNIT);
  }

  getItemsAvailable(id: id): Observable<item[]> {
    return new Observable<item[]>((subscriber) => {
      this.getItems().subscribe((items) => {
        this.service.findProviderById(id).subscribe((provider) => {
          const itemCodesRegisteredInProvider = provider.items?.map(
            (item) => item.itemCode
          );
          const filteredItems = items.filter(
            (item) => !itemCodesRegisteredInProvider?.includes(item.itemCode)
          );
          subscriber.next(filteredItems);
        });
      });
    });
  }
}
