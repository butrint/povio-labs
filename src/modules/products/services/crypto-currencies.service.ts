import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { CryptoCurrency } from '../models/crypto-currency';
import { Fiat } from '../models/fiat';

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
      .pipe(
        map((res: { status: any; data: any[] }) => res.data),
        map(data => this.fromDataArrayToCryptoCurrencies(data))
      );
  }

  fromDataArrayToCryptoCurrencies(data: any) {
    const cryptoCurrencies: CryptoCurrency[] = [];

    for (const d of data) {
      const fiat: Fiat = {
        market_cap: d.quote.USD.market_cap,
        percent_change_1h: d.quote.USD.percent_change_1h,
        percent_change_24h: d.quote.USD.percent_change_24h,
        percent_change_7d: d.quote.USD.percent_change_7d,
        price: d.quote.USD.price,
        volume_24h: d.quote.USD.volume_24h
      };

      const cryptoCurrency: CryptoCurrency = {
        id: d.id,
        cmc_rank: d.cmc_rank,
        fiat,
        symbol: d.symbol
      };

      cryptoCurrencies.push(cryptoCurrency);
    }

    return cryptoCurrencies;
  }
}
