import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from '../modules/products/products.module';
import { CoreModule } from '../modules/core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, AppRoutingModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
