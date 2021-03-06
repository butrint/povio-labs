import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { CryptoCurrenciesService } from './services/crypto-currencies.service';

import { CryptoCurrenciesComponent } from './components/crypto-currencies/crypto-currencies.component';
import { CryptoCurrencyItemComponent } from './components/crypto-currency-item/crypto-currency-item.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoCurrenciesComponent
  },
  {
    path: ':cryptoCurrencyId',
    component: CryptoCurrencyItemComponent
  }
];

@NgModule({
  declarations: [CryptoCurrenciesComponent, CryptoCurrencyItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [CryptoCurrenciesService],
  exports: [RouterModule]
})
export class ProductsModule {}
