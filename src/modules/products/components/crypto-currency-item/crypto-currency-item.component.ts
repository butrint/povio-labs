import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductsState } from '../../store';
import * as fromStore from '../../store';
import { switchMap, mergeMap, map, tap, take } from 'rxjs/operators';
import { CryptoCurrency } from '../../models/crypto-currency';
import { CryptoCurrenciesService } from '../../services/crypto-currencies.service';

@Component({
  selector: 'app-crypto-currency-item',
  templateUrl: './crypto-currency-item.component.html',
  styleUrls: ['./crypto-currency-item.component.scss']
})
export class CryptoCurrencyItemComponent implements OnInit {
  objectKeys = Object.keys;
  cryptoCurrency: CryptoCurrency;

  constructor(
    private store: Store<fromStore.ProductsState>,
    private cryptoCurrenciesService: CryptoCurrenciesService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.store
      .pipe(
        take(1),
        select(fromStore.getSelectedCryptoCurrency),
        switchMap((selectedCryptoCurrency: CryptoCurrency) =>
          this.cryptoCurrenciesService
            .getById(selectedCryptoCurrency.id, 'BTC')
            .pipe(
              map(
                (cryptoCurrencyItem: CryptoCurrency): CryptoCurrency => {
                  return {
                    ...selectedCryptoCurrency,
                    quotes: [
                      ...selectedCryptoCurrency.quotes,
                      ...cryptoCurrencyItem.quotes
                    ]
                  };
                }
              )
            )
        )
      )
      .subscribe(c => (this.cryptoCurrency = c));
  }
}
