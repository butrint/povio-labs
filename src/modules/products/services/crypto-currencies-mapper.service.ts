import { Injectable } from '@angular/core';
import { CryptoCurrency } from '../models/crypto-currency';
import { Quote } from '../models/quote';
import { Fiat } from '../models/fiat';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrenciesMapperService {
  constructor() {}

  toCryptoCurrencies(data: any[]) {
    const cryptoCurrencies: CryptoCurrency[] = [];

    for (const d of data) {
      const cryptoCurrency = this.toCryptoCurrency(d);
      cryptoCurrencies.push(cryptoCurrency);
    }

    return cryptoCurrencies;
  }

  toCryptoCurrency(data: any): CryptoCurrency {
    const firstFiatKey = Object.keys(data.quote)[0];
    const quotes = this.toQuotes(data.quote);
    const quote = this.toQuote(firstFiatKey, data.quote[firstFiatKey]);

    const cryptoCurrency: CryptoCurrency = {
      id: data.id,
      name: data.name,
      circulating_supply: data.circulating_supply,
      total_supply: data.total_supply,
      cmc_rank: data.cmc_rank,
      quotes,
      quote,
      symbol: data.symbol
    };

    return cryptoCurrency;
  }

  toQuotes(data: any[]) {
    const quotes: Quote[] = [];

    for (const key of Object.keys(data)) {
      const fiat = this.toFiat(data[key]);
      quotes.push(this.toQuote(key, fiat));
    }

    return quotes;
  }

  toQuote(key: string, value: Fiat): Quote {
    const quote: Quote = {
      [key]: value
    };

    return quote;
  }

  toFiat(data: any) {
    const fiat: Fiat = {
      market_cap: data.market_cap,
      percent_change_1h: data.percent_change_1h,
      percent_change_7d: data.percent_change_7d,
      price: data.price,
      percent_change_24h: data.percent_change_24h,
      volume_24h: data.volume_24h
    };

    return fiat;
  }
}
