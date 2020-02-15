import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { reducers, effects } from './store';

import { CryptoCurrenciesService } from './services/crypto-currencies.service';

import { CryptoCurrenciesComponent } from './components/crypto-currencies/crypto-currencies.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


const routes: Routes = [
  {
    path: '',
    component: CryptoCurrenciesComponent
  }
];

@NgModule({
  declarations: [CryptoCurrenciesComponent],
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
