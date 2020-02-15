import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCryptoCurrencies from '../reducers/crypto-currencies.reducer';

export const getCryptoCurrenciesState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.cryptoCurrencies
);

export const getCryptoCurrencies = createSelector(
  getCryptoCurrenciesState,
  fromCryptoCurrencies.getCryptoCurrencies
);

export const getCryptoCurrenciesLoaded = createSelector(
  getCryptoCurrenciesState,
  fromCryptoCurrencies.getCryptoCurrenciesLoaded
);

export const getCryptoCurrenciesLoading = createSelector(
  getCryptoCurrenciesState,
  fromCryptoCurrencies.getCryptoCurrenciesLoading
);
