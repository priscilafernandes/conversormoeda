import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent implements OnInit {

  // Variáveis que armazenam dados do Input //
  intercoin
  brcoin
  coin: any;
  initCoin: any;
  formatter: any
  CountryChoose = ''
  SignSpan = ''
  SignFix = 'R$'
  coinDefaultValue = (1.00).toFixed(2)

  // moedas
  dollar: number = 0
  australianDollar: number = 0
  canadianDollar: number = 0
  euro: number = 0
  pound: number = 0

  initDollar: number = 0
  initAustralianDollar: number = 0
  initCanadianDollar: number = 0
  initEuro: number = 0
  initPound: number = 0

  constructor(private currency: CurrencyConversionService) { }

  //Valor Inicial setado //
  ngOnInit(): void {
    // this.getCoin('USD')
    this.CountryChoose = 'Dólar Americano'
    this.SignSpan = 'US$'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.dollar.toFixed(2)
    this.initCurrency()
  }

  
  initCurrency(){
    this.currency.getCurrency('USD').subscribe((data) => {
      this.initCoin = new Object(data);
      this.initDollar = this.initCoin.rates.BRL.toFixed(2)
    })
    this.currency.getCurrency('AUD').subscribe((data) => {
      this.initCoin = new Object(data);
      this.initAustralianDollar = this.initCoin.rates.BRL.toFixed(2)
    })
    this.currency.getCurrency('CAD').subscribe((data) => {
      this.initCoin = new Object(data);
      this.initCanadianDollar = this.initCoin.rates.BRL.toFixed(2)
    })
    this.currency.getCurrency('EUR').subscribe((data) => {
      this.initCoin = new Object(data);
      this.initEuro = this.initCoin.rates.BRL.toFixed(2)
    })
    this.currency.getCurrency('GBP').subscribe((data) => {
      this.initCoin = new Object(data);
      this.initPound = this.initCoin.rates.BRL.toFixed(2)
    })
  }

  //Função Api //
  getCoin(base: string) {
    this.currency.getCurrency(base).subscribe((data) => {
      this.coin = new Object(data);

      this.dollar = this.coin.rates.BRL
      this.australianDollar = this.coin.rates.BRL
      this.canadianDollar = this.coin.rates.BRL
      this.euro = this.coin.rates.BRL
      this.pound = this.coin.rates.BRL
      this.brcoin = this.coin.rates.BRL.toFixed(2)

      console.log(this.coin)
    })
  }
  // Funções dos botões //
  onDollar(event) {
    this.CountryChoose = 'Dólar Americano'
    this.SignSpan = 'US$'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.dollar.toFixed(2)
    this.getCoin('USD')
  }

  onAustralianDollar(event) {
    this.CountryChoose = 'Dólar Australiano'
    this.SignSpan = 'AU$'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.australianDollar.toFixed(2)
    this.getCoin('AUD')
  }

  onCanadianDollar(event) {
    this.CountryChoose = 'Dólar Canadense'
    this.SignSpan = 'CA$'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.canadianDollar.toFixed(2)
    this.getCoin('CAD')
  }

  onEuro(event) {
    this.CountryChoose = 'Euro'
    this.SignSpan = '€'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.euro.toFixed(2)
    this.getCoin('EUR')
  }

  onPound(event) {
    this.CountryChoose = 'Libra'
    this.SignSpan = '£'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.pound.toFixed(2)
    this.getCoin('GBP')
  }

  // Switch case  para cada opção de moeda //
  onChangeInterCoin(event) {
    this.intercoin = event.target.value
    let multiply;

    switch (this.CountryChoose) {
      case 'Dólar Americano':
        multiply = this.intercoin * this.dollar
        break;
      case 'Euro':
        multiply = this.intercoin * this.euro
        break;
      case 'Libra':
        multiply = this.intercoin * this.pound
        break;
      case 'Dólar Canadense':
        multiply = this.intercoin * this.canadianDollar
        break;
      case 'Dólar Australiano':
        multiply = this.intercoin * this.australianDollar
        break;
    }

    this.brcoin = multiply.toFixed(2)
  }

  onChangeBrCoin(event) {
    this.brcoin = event.target.value
    let divider;

    switch (this.CountryChoose) {
      case 'Dólar Americano':
        divider = this.brcoin / this.dollar
        break;
      case 'Euro':
        divider = this.brcoin / this.euro
        break;
      case 'Libra':
        divider = this.brcoin / this.pound
        break;
      case 'Dólar Canadense':
        divider = this.brcoin / this.canadianDollar
        break;
      case 'Dólar Australiano':
        divider = this.brcoin / this.australianDollar
        break;
    }

    this.intercoin = divider.toFixed(2)
  }
}
