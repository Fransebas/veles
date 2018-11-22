import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-operation-pa',
  templateUrl: './operation-pa.component.html',
  styleUrls: ['./operation-pa.component.css']
})
export class OperationPAComponent implements OnInit {

  tasa: number;
  periodos: number;
  anualidad: number;
  res: number;

  constructor(public OpService : OperationsService) {}

  ngOnInit() {
    this.tasa=0;
    this.periodos=0;
    this.anualidad=0;
    this.res=0;
  }

  onValueChange() {
    this.res = this.OpService.getPA(this.anualidad,this.tasa,this.periodos);
  }
}