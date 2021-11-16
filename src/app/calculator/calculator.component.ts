import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: any;

  constructor() { }

  ngOnInit() {
  }
  calculator(numberA, numberB, cal) {
    switch (cal) {
      case '+': {
        this.result = +numberA + (+numberB);
        break;
      }
      case '-': {
        this.result = numberA - numberB;
        break;
      }
      case '*': {
        this.result = numberA * numberB;
        break;
      }
      case '/': {
        if (numberB === 0) {
          this.result = 'error';
        } else {
          this.result = numberA / numberB;
        }
      }
    }
  }
}
