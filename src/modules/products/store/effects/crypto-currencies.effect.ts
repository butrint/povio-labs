import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { CryptoCurrenciesService } from '../../services/crypto-currencies.service';
import * as CryptoCurrenciesActions from '../actions/crypto-currencies.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CryptoCurrenciesEffects {
  loadCryptoCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CryptoCurrenciesActions.loadCryptoCurrencies),
      switchMap(() =>
        this.cryptoCurrenciesService.getAll().pipe(
          map(cryptoCurrencies =>
            CryptoCurrenciesActions.loadCryptoCurrenciesSuccess({
              cryptoCurrencies
            })
          ),
          catchError(error =>
            of(
              CryptoCurrenciesActions.loadCryptoCurrenciesFail({
                error
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private cryptoCurrenciesService: CryptoCurrenciesService
  ) {}
}
