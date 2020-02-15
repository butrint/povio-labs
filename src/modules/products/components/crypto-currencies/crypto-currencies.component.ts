import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { ProductsState } from '../../store';
import * as CryptoCurrenciesAction from '../../store/actions/crypto-currencies.action';

@Component({
  selector: 'app-crypto-currencies',
  templateUrl: './crypto-currencies.component.html',
  styleUrls: ['./crypto-currencies.component.scss']
})
export class CryptoCurrenciesComponent implements OnInit {
  public cryptoCurrencies$ = this.store.pipe(
    select(fromStore.getCryptoCurrencies)
  );

  constructor(private store: Store<ProductsState>) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.store.dispatch(CryptoCurrenciesAction.loadCryptoCurrencies());
  }
}
