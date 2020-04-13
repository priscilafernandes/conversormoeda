import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "https://api.exchangeratesapi.io/"

@Injectable({
  providedIn: 'root'
})

export class CurrencyConversionService {

  constructor(private http: HttpClient) { }

  getCurrency(coin) {
    let apiCurrency = `${apiUrl}latest?base=${coin}`;
    return this.http.get(apiCurrency)
  }

  getCurrencyHistory(start, end) {
    let apiCurrencyHistory = `${apiUrl}history?start_at=${start}&end_at=${end}`;
    return this.http.get(apiCurrencyHistory)
  }
}
