import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-per-fp',
  templateUrl: './per-fp.component.html',
  styleUrls: ['./per-fp.component.css']
})
export class PerFPComponent implements OnInit {

  tasa: number;
  futuro: number;
  presente: number;
  res: number;

  constructor(public OpService : OperationsService) {}

  ngOnInit() {
    this.tasa=0;
    this.futuro=0;
    this.presente=0;
    this.res=0;
  }

  onValueChange() {
    this.res = this.OpService.getNfp(this.futuro,this.presente,this.tasa);
  }
}