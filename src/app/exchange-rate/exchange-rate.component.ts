import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRate } from './exchangerate.model';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css'],
})
export class ExchangeRateComponent implements OnInit {
  exchangeRate: ExchangeRate = new ExchangeRate();

  constructor(private exchangeRateService: ExchangeRateService) {
    this.exchangeRateService.getExchangeRateInfo().subscribe(
      (exchangeRate) => {
        console.log(exchangeRate);
        this.exchangeRate = exchangeRate;
      },
      (err) => {
        new Error('Failed to fetech');
      }
    );
  }

  ngOnInit(): void {}

  getExchangeRateUSD() {}
}
