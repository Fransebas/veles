import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-per-fa',
  templateUrl: './per-fa.component.html',
  styleUrls: ['./per-fa.component.css']
})
export class PerFAComponent implements OnInit {

  tasa: number;
  futuro: number;
  anualidad: number;
  res: number;

  constructor(public OpService : OperationsService) {}

  ngOnInit() {
    this.tasa=0;
    this.futuro=0;
    this.anualidad=0;
    this.res=0;
  }

  onValueChange() {
    this.res = this.OpService.getNaf(this.anualidad,this.futuro,this.tasa);
  }
}