import { Component, OnInit } from '@angular/core';
import {DataScreenComunication} from '../Models/DataScreenComunication';
import {FluxModel} from '../Models/FluxModel';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  JSON = JSON;

  n_proyects : number;

  dataNumbers: number[] = [];
  datas : DataScreenComunication[] = [];

  constructor() { }

  ngOnInit() {
  }

  public onNPeriodsChange(data: DataScreenComunication, i: number) {
    this.datas[i] = data;
  }

  onNperiodChange() {
    this.dataNumbers = [];
    this.datas = [];
    const auxDatas = [];
    const auxList = [];
    for (let i = 0; i < this.n_proyects; i++) {
      auxList.push(i);
      auxDatas.push(new DataScreenComunication());
    }

    this.datas = auxDatas;

    this.dataNumbers = auxList;
  }

  public calculate()
  {
    this.datas.sort( (a : DataScreenComunication, b : DataScreenComunication) => {
      if (a.vna < b.vna)
        return 1;
      if (a.vna > b.vna)
        return -1;
      return 0;
    })

    var r : number;
    var g : number;
    var b : number;
    r = 0;
    g = 255;
    b = 0;
    for (let i = 0; i < this.datas.length; i++) {
      this.datas[i].color = "rgb("+r.toString()+", "+g.toString()+", "+b.toString()+")";
      r = Math.floor(255/this.datas.length*(i+1));
      g = 255 - Math.floor(255/this.datas.length*(i+1));
    }
  }
}