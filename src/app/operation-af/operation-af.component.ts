import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-operation-af',
  templateUrl: './operation-af.component.html',
  styleUrls: ['./operation-af.component.css']
})
export class OperationAFComponent implements OnInit {

  tasa: number;
  periodos: number;
  futuro: number;
  res: number;

  constructor(public OpService : OperationsService) {}

  ngOnInit() {
    this.tasa=0;
    this.periodos=0;
    this.futuro=0;
    this.res=0;
  }

  onValueChange() {
    this.res = this.OpService.getPF(this.futuro,this.tasa,this.periodos);
  }

}
