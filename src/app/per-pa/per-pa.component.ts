import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-per-pa',
  templateUrl: './per-pa.component.html',
  styleUrls: ['./per-pa.component.css']
})
export class PerPAComponent implements OnInit {

  tasa: number;
  presente: number;
  anualidad: number;
  res: number;

  constructor(public OpService : OperationsService) {}

  ngOnInit() {
    this.tasa=0;
    this.presente=0;
    this.anualidad=0;
    this.res=0;
  }

  onValueChange() {
    this.res = this.OpService.getNpa(this.presente,this.anualidad,this.tasa);
  }
}