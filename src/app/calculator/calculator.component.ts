import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.dollar.toFixed(2)
    this.CountryChoose = 'Dólar Americano'
  }
  // Variáveis que armazenam dados do Input //
  intercoin
  brcoin

  formatter: any
  CountryChoose = ''
  coinDefaultValue = (1.00).toFixed(2)
  euro = 5.68
  dollar = 5.20
  pound = 5.75
  australianDollar = 3.23
  canadianDollar = 3.72

  // Functions on Buttons //
  onDollar(event) {
    this.CountryChoose = 'Dólar Americano'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.dollar.toFixed(2)
  }
  onEuro(event) {
    this.CountryChoose = 'Euro'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.euro.toFixed(2)
  }
  onPound(event) {
    this.CountryChoose = 'Libra'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.pound.toFixed(2)
  }
  onCanadianDollar(event) {
    this.CountryChoose = 'Dólar Canadense'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.canadianDollar.toFixed(2)
  }
  onAustralianDollar(event) {
    this.CountryChoose = 'Dólar Australiano'
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.australianDollar.toFixed(2)
  }

  // Switch case  with coins by Input //
  onChangeInterCoin(event) {
    this.intercoin = event.target.value
    let multiply
    switch (this.CountryChoose) {
      case 'Dólar Americano':
        multiply = this.intercoin * this.dollar
        console.log(this.intercoin);
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

      default:
        break;
    }
    this.brcoin = multiply.toFixed(2)
  }
  //------------------------------------------
  onChangeBrCoin(event) {
    this.brcoin = event.target.value
    let divider
    switch (this.CountryChoose) {
      case 'Dólar Americano':
        divider = this.brcoin / this.dollar
        console.log(this.brcoin);
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

      default: 'Dólaar Americano'
        break;
    }
    this.intercoin = divider.toFixed(2)
  }
}