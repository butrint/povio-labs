import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#setFiat should set fiat on local storage and change current fiat', () => {
    const fiat = 'dummy';
    service.setFiat(fiat);

    expect(localStorage.getItem('fiat')).toBe(fiat);
    expect(service.getCurrentFiat()).toBe(fiat);
  });
});
