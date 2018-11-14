import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-screen',
  templateUrl: './data-screen.component.html',
  styleUrls: ['./data-screen.component.css']
})
export class DataScreenComponent implements OnInit {

  periods: number;
  initialValue: number;
  interest: number;
  periodInteres: number;
  operationCost: number;
  returnValue: number;
  roi: number;

  fluxList: number[] = [];


  constructor() {
  }

  ngOnInit() {
  }

  onNperiodChange() {
    this.fluxList = [];
    const auxList = [];
    for (let i = 0; i < this.periods; i++) {
      auxList.push(i);
    }

    this.fluxList = auxList;

  }

}
