import { Action, createReducer, on } from '@ngrx/store';
import * as CryptoCurrenciesActions from '../actions/crypto-currencies.action';
import { CryptoCurrency } from '../../models/crypto-currency';

export interface CryptoCurrencyState {
  entities: { [id: number]: CryptoCurrency };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CryptoCurrencyState = {
  entities: {},
  loaded: false,
  loading: false
};

const cryptoCurrenciesReducer = createReducer(
  initialState,
  on(CryptoCurrenciesActions.loadCryptoCurrencies, state => ({
    ...state,
    loading: true
  })),
  on(CryptoCurrenciesActions.loadCryptoCurrenciesFail, state => ({
    ...state,
    loaded: false,
    loading: false
  })),
  on(
    CryptoCurrenciesActions.loadCryptoCurrenciesSuccess,
    (state, { cryptoCurrencies }) => {
      const entities = cryptoCurrencies.reduce(
        (
          pEntities: { [id: number]: CryptoCurrency },
          cryptoCurrency: CryptoCurrency
        ) => {
          return {
            ...pEntities,
            [cryptoCurrency.id]: cryptoCurrency
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
  )
);

export function reducer(
  state: CryptoCurrencyState | undefined,
  action: Action
) {
  return cryptoCurrenciesReducer(state, action);
}

export const getCryptoCurrenciesLoading = (state: CryptoCurrencyState) =>
  state.loading;
export const getCryptoCurrenciesLoaded = (state: CryptoCurrencyState) =>
  state.loaded;
export const getCryptoCurrenciesEntities = (state: CryptoCurrencyState) =>
  state.entities;
