import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRate } from './exchangerate.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  constructor(private http: HttpClient) {}

  getExchangeRateInfo(): Observable<ExchangeRate> {
    return this.http.get<ExchangeRate>(
      'http://localhost:8080/api/exchange-rate'
    );
  }
}
