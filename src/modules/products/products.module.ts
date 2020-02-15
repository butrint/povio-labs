import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoCurrenciesComponent } from './components/crypto-currencies/crypto-currencies.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CryptoCurrenciesComponent
  }
];

@NgModule({
  declarations: [CryptoCurrenciesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsModule {}
