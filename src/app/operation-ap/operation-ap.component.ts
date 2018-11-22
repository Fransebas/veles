import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-operation-ap',
  templateUrl: './operation-ap.component.html',
  styleUrls: ['./operation-ap.component.css']
})
export class OperationAPComponent implements OnInit {

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
    this.res = this.OpService.getAP(this.presente,this.tasa,this.periodos);
  }

}
