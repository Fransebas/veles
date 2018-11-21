import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {

  text1: string;
  value1: number;
  value2: number;

  constructor() {
    this.text1 = "Hola";
  }

  ngOnInit() {
  }

  onOpcionChange() {
     
  }
}
