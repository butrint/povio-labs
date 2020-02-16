import {
  ActionReducerMap,
  createFeatureSelector
} from '@ngrx/store';
import * as fromCryptoCurrenciesReducer from './crypto-currencies.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface ProductsState {
  cryptoCurrencies: fromCryptoCurrenciesReducer.CryptoCurrencyState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  cryptoCurrencies: fromCryptoCurrenciesReducer.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>('router');
