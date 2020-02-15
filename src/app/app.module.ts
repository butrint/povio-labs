import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '../modules/core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
