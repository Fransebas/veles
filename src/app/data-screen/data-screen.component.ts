import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FluxModel} from '../Models/FluxModel';
import {OperationsService} from '../operations.service';
import {DataScreenComunication} from '../Models/DataScreenComunication';

@Component({
  selector: 'app-data-screen',
  templateUrl: './data-screen.component.html',
  styleUrls: ['./data-screen.component.css']
})
export class DataScreenComponent implements OnInit {

  @Input() dataObj: DataScreenComunication = new DataScreenComunication();
  @Output() changeModel : EventEmitter<DataScreenComunication> = new EventEmitter<DataScreenComunication>();

  constructor(public operationService: OperationsService) {

  }

  ngOnInit() {
  }

  public onFluxChange(flux: FluxModel, i: number) {
    this.dataObj.fluxList[i] = flux;
  }

  public calculate() {
    var fluxCopyList = JSON.parse(JSON.stringify(this.dataObj.fluxList));
    fluxCopyList.forEach( flux => {
      flux.to = parseFloat(String(flux.to));
      flux.amount = parseFloat(String(flux.amount));
      flux.from = parseFloat(String(flux.from));
    });
    if (this.dataObj.operationCost)
      fluxCopyList.forEach( flux => flux.amount += parseFloat(String(this.dataObj.operationCost)));
    if (this.dataObj.returnValue)
      fluxCopyList[fluxCopyList.length - 1].amount = fluxCopyList[fluxCopyList.length - 1].amount + parseFloat(this.dataObj.returnValue);
    var a = this.operationService.getVNA(fluxCopyList, this.dataObj.interest) + (this.dataObj.initialValue ? parseFloat(String(this.dataObj.initialValue)) : 0 );
    console.log("a", a);
    this.dataObj.vna = a;
    this.changeModel.emit(this.dataObj);
  }

  onNperiodChange() {
    this.dataObj.fluxNumbers = [];
    this.dataObj.fluxList = [];
    const auxList = [];
    for (let i = 0; i < this.dataObj.periods; i++) {
      auxList.push(i);
      this.dataObj.fluxList.push(new FluxModel());
    }

    this.dataObj.fluxNumbers = auxList;

  }

}
