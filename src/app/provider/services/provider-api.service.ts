import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { provider } from '../interfaces';

type id = number | undefined | string | null;

@Injectable({
  providedIn: 'any',
})
export class ProviderApiService {
  private BASE_URL: string = 'http://localhost:3000/providers/';

  constructor(private http: HttpClient) {}

  getProviders(): Observable<provider[]> {
    return this.http.get<provider[]>(this.BASE_URL);
  }

  findProviderById(id: id): Observable<provider> {
    return this.http.get<provider>(this.BASE_URL + id);
  }

  createProvider(provider: provider): Observable<provider> {
    return this.http.post<provider>(this.BASE_URL, provider);
  }

  updateProvider(id: id, provider: provider): Observable<provider> {
    return this.http.put<provider>(this.BASE_URL + id, provider);
  }

  deleteProvider(id: id): Observable<provider> {
    return this.http.delete<provider>(this.BASE_URL + id);
  }
}
