import {Component, Input, OnInit} from '@angular/core';
import {FluxModel} from '../Models/FluxModel';
import {OperationsService} from '../operations.service';

@Component({
  selector: 'app-data-screen',
  templateUrl: './data-screen.component.html',
  styleUrls: ['./data-screen.component.css']
})
export class DataScreenComponent implements OnInit {

  @Input() vna: number;

  periods: number;
  initialValue: number;
  interest: number;
  periodInteres: number;
  operationCost: number;
  returnValue;
  roi: number;

  fluxNumbers: number[] = [];
  fluxList: FluxModel[] = [];

  JSON;




  constructor(public operationService: OperationsService) {
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  public onFluxChange(flux: FluxModel, i: number) {
    this.fluxList[i] = flux;
  }

  public calculate() {
    var fluxCopyList = JSON.parse(JSON.stringify(this.fluxList));
    fluxCopyList.forEach( flux => {
      flux.to = parseFloat(String(flux.to));
      flux.amount = parseFloat(String(flux.amount));
      flux.from = parseFloat(String(flux.from));
    });
    fluxCopyList.forEach( flux => flux.amount += parseFloat(String(this.operationCost)));
    if (this.returnValue)
      fluxCopyList[fluxCopyList.length - 1].amount = fluxCopyList[fluxCopyList.length - 1].amount + parseFloat(this.returnValue);
    this.vna = this.operationService.getVNA(fluxCopyList, this.interest) + (this.initialValue ? parseFloat(String(this.initialValue)) : 0 );
  }

  onNperiodChange() {
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
