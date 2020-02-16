import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private currentFiatSubject = new BehaviorSubject<string>('USD');
  public currentFiat$ = this.currentFiatSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor() {
    this.checkInStorage();
  }

  private checkInStorage() {
    if (localStorage.getItem('fiat')) {
      const fiat = localStorage.getItem('fiat');
      this.setFiat(fiat);
    }
  }

  public setFiat(fiat: string) {
    localStorage.setItem('fiat', fiat);
    this.currentFiatSubject.next(fiat);
  }

  public getCurrentFiat() {
    return this.currentFiatSubject.value;
  }
}
