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
  }


  input1
  input2
  
  brl:number = 1
  onDollar(event) {
    let dollar = 5.20
    this.input1 = 1
    this.input2 = dollar
  }
  onEuro(event) {
    let euro = 5.68
    this.input1 = 1
    this.input2 = euro
  }
  onPound(event) {
    let pound = 5.75
    this.input1 = 1
    this.input2 = pound
  }
  onCanadianDollar(event) {
    let canadianDollar = 3.72
    this.input1 = 1
    this.input2 = canadianDollar
  }
  onAustralianDollar(event) {
    let australianDollar = 3.23
    this.input1 = 1
    this.input2 = australianDollar
  }


  onChangeCountry(event) {

  }
  onChangeCoin(event) {

  }
}
