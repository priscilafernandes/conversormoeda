import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "https://api.exchangeratesapi.io/latest?base="

@Injectable({
  providedIn: 'root'
})

export class CurrencyConversionService {

  constructor(private http: HttpClient) { }

  getCurrency(coin) {
    let apiCurrency = apiUrl+coin
    return this.http.get(apiCurrency)
  }
}
