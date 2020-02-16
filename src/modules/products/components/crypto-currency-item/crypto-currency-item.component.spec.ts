import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyItemComponent } from './crypto-currency-item.component';

describe('CryptoCurrencyItemComponent', () => {
  let component: CryptoCurrencyItemComponent;
  let fixture: ComponentFixture<CryptoCurrencyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCurrencyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCurrencyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
