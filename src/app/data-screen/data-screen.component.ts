import {Component, OnInit} from '@angular/core';
import {FluxModel} from '../Models/FluxModel';
import {OperationsService} from '../operations.service';

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

  fluxNumbers: number[] = [];
  fluxList: FluxModel[] = [];

  JSON;

  vna: number;


  constructor(public operationService: OperationsService) {
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  public onFluxChange(flux: FluxModel, i: number) {
    console.log('Sup!!', flux);
    console.log('i', i);
    this.fluxList[i] = flux;
  }

  public calculate() {
    this.vna = this.operationService.getVNA(this.fluxList, this.interest);
  }

  onNperiodChange() {
    console.log('=(');
    this.fluxNumbers = [];
    this.fluxList = [];
    const auxList = [];
    for (let i = 0; i < this.periods; i++) {
      auxList.push(i);
      this.fluxList.push(new FluxModel());
    }

    this.fluxNumbers = auxList;

  }

}
