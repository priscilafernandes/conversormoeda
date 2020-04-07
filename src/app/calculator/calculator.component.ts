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

  euro = 5.68
  dollar = 5.20
  pound = 5.75
  australianDollar = 3.23
  canadianDollar = 3.72


  input1
  input2

  brl: number = 1

  onDollar(event) {
    this.input1 = 1
    this.input2 = this.dollar
  }
  onEuro(event) {
    this.input1 = 1
    this.input2 = this.euro
  }
  onPound(event) {
    this.input1 = 1
    this.input2 = this.pound
  }
  onCanadianDollar(event) {
    this.input1 = 1
    this.input2 = this.canadianDollar
  }
  onAustralianDollar(event) {
    this.input1 = 1
    this.input2 = this.australianDollar
  }


  onChangeInput1(event) {
    this.input1 = event.target.value
    let divider = this.input1 * this.input2
    this.input2 = divider.toFixed(3)
  }
  onChangeInput2(event) {
  this.input2 = event.target.value
  let multiply = this.input2 / this.input1
  this.input1 = multiply.toFixed(3)
  }
}
