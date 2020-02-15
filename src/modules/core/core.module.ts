import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from './interceptors/api-key-interceptor.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    }
  ],
  exports: [HttpClientModule]
})
export class CoreModule {}
