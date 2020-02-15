import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromCryptoCurrenciesReducer from './crypto-currencies.reducer';
import { CryptoCurrencyState } from './crypto-currencies.reducer';

export interface ProductsState {
  cryptoCurrencies: fromCryptoCurrenciesReducer.CryptoCurrencyState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  cryptoCurrencies: fromCryptoCurrenciesReducer.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);
