import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsModule } from "../modules/products/products.module";
import { CoreModule } from "../modules/core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, AppRoutingModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
