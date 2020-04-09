import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private currency: CurrencyConversionService) { }
  //Valor Inicial setado //
  ngOnInit(): void {
    this.getCoin('USD', 'BRL')
    this.CountryChoose = 'Dólar Americano'
    this.intercoin = this.coinDefaultValue
    this.brcoin = (this.americanDollarValue = this.coinInput)
    console.log(this.coinInput);
  }
  // Variáveis que armazenam dados do Input //
  intercoin: any
  brcoin: any
  // Variáveis que armazenam dados da Api //
  americanDollarValue: any
  australianDollarValue: any
  canadianDollarValue: any
  euroValue: any
  poundValue: any
  //Variáveis que alteram países, símbolos das moedas //
  CountryChoose: string = ''
  SignSpan: string = ''
  SignFix: string = 'R$'
  coinDefaultValue = (1).toFixed(2)
  coinInput = ''
  //Função Api //
  getCoin(interValue, defaultValue) { //valueCoin2) {
    let urlValue
    this.currency.getCurrency(interValue).subscribe(
      (data) => {
        urlValue = new Object(data)
        return (this.coinInput = urlValue.rates[defaultValue])
      });
  }
  
  // Funções dos botões //
  onDollar(event) {
    this.getCoin('USD', 'BRL')
    this.CountryChoose = 'Dólar Americano'
    this.SignSpan = 'US$'
    this.intercoin = this.coinDefaultValue
    this.brcoin = (this.americanDollarValue = this.coinInput)
  }
  onAustralianDollar(event) {
    this.getCoin('AUD', 'BRL')
    this.CountryChoose = 'Dólar Australiano'
    this.SignSpan = 'AU$'
    this.intercoin = this.coinDefaultValue
  }
  onCanadianDollar(event) {
    this.getCoin('CAD', 'BRL')
    this.CountryChoose = 'Dólar Canadense'
    this.SignSpan = 'CA$'
    this.intercoin = this.coinDefaultValue
  }
  onEuro(event) {
    this.getCoin('EUR', 'BRL')
    this.CountryChoose = 'Euro'
    this.SignSpan = '€'
    this.intercoin = this.coinDefaultValue
  }
  onPound(event) {
    this.getCoin('GBP', 'BRL')
    this.CountryChoose = 'Libra'
    this.SignSpan = '£'
    this.intercoin = this.coinDefaultValue
  }

  // Switch case  para cada opção de moeda //
  onChangeInterCoin(event) {
    this.intercoin = event.target.value
    let multiply
    switch (this.CountryChoose) {
      case 'Dólar Americano':
        multiply = this.intercoin * this.americanDollarValue
        break;
      case 'Dólar Australiano':
        multiply = this.intercoin * this.australianDollarValue
        break;
      case 'Dólar Canadense':
        multiply = this.intercoin * this.canadianDollarValue
        break;
      case 'Euro':
        multiply = this.intercoin * this.euroValue
        break;
      case 'Libra':
        multiply = this.intercoin * this.poundValue
        break;
    }
    this.brcoin = multiply.toFixed(2)
  }

  onChangeBrCoin(event) {
    this.brcoin = event.target.value
    let divider
    switch (this.CountryChoose) {
      case 'Dólar Americano':
        divider = this.brcoin / this.americanDollarValue
        break;
      case 'Dólar Australiano':
        divider = this.brcoin / this.australianDollarValue
        break;
      case 'Dólar Canadense':
        divider = this.brcoin / this.canadianDollarValue
        break;
      case 'Euro':
        divider = this.brcoin / this.euroValue
        break;
      case 'Libra':
        divider = this.brcoin / this.poundValue
        break;
    }
    this.intercoin = divider.toFixed(2)
  }

}