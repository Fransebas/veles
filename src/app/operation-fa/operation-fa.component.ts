import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-operation-fa',
  templateUrl: './operation-fa.component.html',
  styleUrls: ['./operation-fa.component.css']
})
export class OperationFAComponent implements OnInit {

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
    this.res = this.OpService.getFA(this.anualidad,this.tasa,this.periodos);
  }
}