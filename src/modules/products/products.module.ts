import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CryptoCurrenciesService } from './services/crypto-currencies.service';

import { CryptoCurrenciesComponent } from './components/crypto-currencies/crypto-currencies.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoCurrenciesComponent
  }
];

@NgModule({
  declarations: [CryptoCurrenciesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [CryptoCurrenciesService],
  exports: [RouterModule]
})
export class ProductsModule {}
