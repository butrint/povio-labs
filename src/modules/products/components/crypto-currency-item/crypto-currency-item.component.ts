import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { switchMap, mergeMap, map, tap, take } from 'rxjs/operators';
import { CryptoCurrency } from '../../models/crypto-currency';
import { CryptoCurrenciesService } from '../../services/crypto-currencies.service';
import { SettingsService } from 'src/modules/shared/services/settings.service';

@Component({
  selector: 'app-crypto-currency-item',
  templateUrl: './crypto-currency-item.component.html',
  styleUrls: ['./crypto-currency-item.component.scss']
})
export class CryptoCurrencyItemComponent implements OnInit {
  objectKeys = Object.keys;
  cryptoCurrency: CryptoCurrency;
  fiat: string;

  constructor(
    private store: Store<fromStore.ProductsState>,
    private cryptoCurrenciesService: CryptoCurrenciesService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.updateFiat();
    this.settingsService.currentFiat$.subscribe(() => {
      this.updateFiat();
      this.refresh();
    });
  }

  updateFiat() {
    this.fiat = this.settingsService.getCurrentFiat();
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
