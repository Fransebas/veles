import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-operation-ief',
  templateUrl: './operation-ief.component.html',
  styleUrls: ['./operation-ief.component.css']
})
export class OperationIEFComponent implements OnInit {

  tasa: number;
  periodos: number;
  res: number;

  constructor(public OpService : OperationsService) {}

  ngOnInit() {
    this.tasa=0;
    this.periodos=0;
    this.res=0;
  }

  onValueChange() {
    this.res = this.OpService.getIEF(this.tasa,this.periodos);
  }
}