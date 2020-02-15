import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrenciesService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get(`/v1/cryptocurrency/listings/latest`, {
        params: {
          start: '1',
          limit: '100',
          convert: 'USD'
        }
      })
      .pipe(map((res: { status: any; data: any[] }) => res.data));
  }
}
