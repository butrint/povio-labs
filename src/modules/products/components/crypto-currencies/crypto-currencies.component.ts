import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { ProductsState } from '../../store';
import * as CryptoCurrenciesAction from '../../store/actions/crypto-currencies.action';
import { SettingsService } from 'src/modules/shared/services/settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crypto-currencies',
  templateUrl: './crypto-currencies.component.html',
  styleUrls: ['./crypto-currencies.component.scss']
})
export class CryptoCurrenciesComponent implements OnInit {
  public cryptoCurrencies$ = this.store.pipe(
    select(fromStore.getCryptoCurrencies)
  );
  public fiat: string;

  constructor(
    private store: Store<ProductsState>,
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

  refresh() {
    this.store.dispatch(CryptoCurrenciesAction.loadCryptoCurrencies());
  }

  updateFiat() {
    this.fiat = this.settingsService.getCurrentFiat();
  }
}
