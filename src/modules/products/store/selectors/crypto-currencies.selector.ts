import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCryptoCurrencies from '../reducers/crypto-currencies.reducer';
import * as fromRoot from '../../../../app/store';

export const getCryptoCurrenciesState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.cryptoCurrencies
);

export const getCryptoCurrenciesEntities = createSelector(
  getCryptoCurrenciesState,
  fromCryptoCurrencies.getCryptoCurrenciesEntities
);

export const getCryptoCurrencies = createSelector(
  getCryptoCurrenciesEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getSelectedCryptoCurrency = createSelector(
  getCryptoCurrenciesEntities,
  fromRoot.getRouterState,
  (cryptoCurrencies, router) =>
    router.state && cryptoCurrencies[router.state.params.cryptoCurrencyId]
);

export const getCryptoCurrenciesLoaded = createSelector(
  getCryptoCurrenciesState,
  fromCryptoCurrencies.getCryptoCurrenciesLoaded
);

export const getCryptoCurrenciesLoading = createSelector(
  getCryptoCurrenciesState,
  fromCryptoCurrencies.getCryptoCurrenciesLoading
);
