import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crypto-currencies',
    pathMatch: 'full'
  },
  {
    path: 'crypto-currencies',
    loadChildren: () =>
      import('../modules/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
