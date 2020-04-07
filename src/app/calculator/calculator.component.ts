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

  //
  onDollar(event) {
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.dollar.toFixed(2)
    this.CountryChoose = 'Dólar Americano'
  }
  onEuro(event) {
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.euro.toFixed(2)
    this.CountryChoose = 'Euro'
  }
  onPound(event) {
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.pound.toFixed(2)
    this.CountryChoose = 'Libra'
  }
  onCanadianDollar(event) {
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.canadianDollar.toFixed(2)
    this.CountryChoose = 'Dólar Canadense'
  }
  onAustralianDollar(event) {
    this.intercoin = this.coinDefaultValue
    this.brcoin = this.australianDollar.toFixed(2)
    this.CountryChoose = 'Dólar Australiano'
  }
  // Change Coins //
  onChangeInterCoin(event) {
    this.intercoin = event.target.value
    let multiply = this.intercoin * this.brcoin
    this.brcoin = multiply.toFixed(2)
  }
  onChangeBrCoin(event) {
    this.brcoin = event.target.value
    let divider
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

      default:
        break;
    }

    this.intercoin = divider.toFixed(2)
  }
}
