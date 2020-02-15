import { TestBed } from "@angular/core/testing";

import { CryptoCurrenciesService } from "./crypto-currencies.service";

describe("CryptoCurrenciesService", () => {
  let service: CryptoCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoCurrenciesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
