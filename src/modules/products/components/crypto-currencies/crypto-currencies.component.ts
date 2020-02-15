import { Component, OnInit } from '@angular/core';
import { CryptoCurrenciesService } from '../../services/crypto-currencies.service';

@Component({
  selector: 'app-crypto-currencies',
  templateUrl: './crypto-currencies.component.html',
  styleUrls: ['./crypto-currencies.component.scss']
})
export class CryptoCurrenciesComponent implements OnInit {
  public cryptoCurrencies = [];

  constructor(private cryptoCurrenciesService: CryptoCurrenciesService) {}

  ngOnInit(): void {
    this.cryptoCurrenciesService.getAll().subscribe(data => {
      this.cryptoCurrencies = data;
    });
  }
}
