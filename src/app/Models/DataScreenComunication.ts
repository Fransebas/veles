import {FluxModel} from './FluxModel';

export class DataScreenComunication {

  constructor() {
    this.vna = 0;
    this.color = 0;
  }

  vna : number;
  color;
  i : number;

  periods: number;
  initialValue: number;
  interest: number;
  periodInteres: number;
  operationCost: number;
  returnValue;
  roi: number;

  fluxNumbers: number[] = [];
  fluxList: FluxModel[] = [];
}
