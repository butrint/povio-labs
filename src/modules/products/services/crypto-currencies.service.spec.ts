import { TestBed } from '@angular/core/testing';

import { CryptoCurrenciesService } from './crypto-currencies.service';
import { CryptoCurrency } from '../models/crypto-currency';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('CryptoCurrenciesService', () => {
  let service: CryptoCurrenciesService;
  let httpClientSpy: { get: jasmine.Spy };
  let mapperSpy: { toCryptoCurrencies: jasmine.Spy };
  let settingsSpy: { getCurrentFiat: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    mapperSpy = jasmine.createSpyObj('CryptoCurrenciesMapperService', [
      'toCryptoCurrencies'
    ]);
    settingsSpy = jasmine.createSpyObj('SettingsService', ['getCurrentFiat']);
    service = new CryptoCurrenciesService(
      httpClientSpy as any,
      mapperSpy as any,
      settingsSpy as any
    );
  });

  it('#getAll should return expected crypto currencies', () => {
    const expectedCryptoCurrencies: CryptoCurrency[] = [
      {
        id: 1,
        circulating_supply: 1,
        cmc_rank: 1,
        name: '1',
        symbol: '1',
        total_supply: 1
      },
      {
        id: 2,
        circulating_supply: 2,
        cmc_rank: 2,
        name: '2',
        symbol: '2',
        total_supply: 2
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedCryptoCurrencies));
    mapperSpy.toCryptoCurrencies.and.returnValue(expectedCryptoCurrencies);

    service
      .getAll()
      .subscribe(
        cryptoCurrencies =>
          expect(cryptoCurrencies).toEqual(expectedCryptoCurrencies),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
