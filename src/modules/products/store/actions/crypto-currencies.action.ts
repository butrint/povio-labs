import { createAction, props } from '@ngrx/store';
import { CryptoCurrency } from '../../models/crypto-currency';

export const loadCryptoCurrencies = createAction(
  '[Crypto Currencies Component] Load Crypto Currencies'
);

export const loadCryptoCurrenciesSuccess = createAction(
  '[Crypto Currencies Component] Load Crypto Currencies Success',
  props<{ cryptoCurrencies: CryptoCurrency[] }>()
);

export const loadCryptoCurrenciesFail = createAction(
  '[Crypto Currencies Component] Load Crypto Currencies Fail',
  props<{ error: any }>()
);
