import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, switchMap } from 'rxjs/operators';
import { CryptoCurrenciesMapperService } from './crypto-currencies-mapper.service';
import { of, Observable } from 'rxjs';
import { CryptoCurrency } from '../models/crypto-currency';
import { SettingsService } from 'src/modules/shared/services/settings.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrenciesService {
  constructor(
    private httpClient: HttpClient,
    private mapper: CryptoCurrenciesMapperService,
    private settingsService: SettingsService
  ) {}

  getAll() {
    const fiat = this.settingsService.getCurrentFiat();

    return this.httpClient
      .get(`/v1/cryptocurrency/listings/latest`, {
        params: {
          start: '1',
          limit: '100',
          convert: fiat
        }
      })
      .pipe(
        map((res: { status: any; data: any[] }) => res.data),
        map(data => this.mapper.toCryptoCurrencies(data))
      );
  }

  getById(id: number, convert: string): Observable<CryptoCurrency> {
    const fiat = this.settingsService.getCurrentFiat();

    return this.httpClient
      .get(`/v1/cryptocurrency/quotes/latest?id=${id}&convert=${fiat}`)
      .pipe(
        map((res: { status: any; data: any }) => res.data),
        switchMap(data => of(this.mapper.toCryptoCurrency(data[id])))
      );
  }
}
