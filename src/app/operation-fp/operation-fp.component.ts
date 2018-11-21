import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-operation-fp',
  templateUrl: './operation-fp.component.html',
  styleUrls: ['./operation-fp.component.css']
})
export class OperationFPComponent implements OnInit {

  tasa: number;
  periodos: number;
  presente: number;
  res: number;

  constructor(public OpService : OperationsService) {}

  ngOnInit() {
    this.tasa=0;
    this.periodos=0;
    this.presente=0;
    this.res=0;
  }

  onValueChange() {
    this.res = this.OpService.getFP(this.presente,this.tasa,this.periodos);
  }

}
