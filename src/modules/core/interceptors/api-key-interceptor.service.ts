import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'X-CMC_PRO_API_KEY': 'd9e62af2-227f-4590-8a83-b1f0d77a13d3',
        'Content-Type': 'application/json'
      }
    });

    return next.handle(request);
  }
}
