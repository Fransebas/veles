import { Injectable } from '@angular/core';
import {FluxModel} from './Models/FluxModel';
import {max} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }

  getFP(presente: number, tasa: number, periodos: number) {
    return presente * Math.pow(1 + tasa, periodos);
  }

  getPF(futuro: number, tasa: number, periodos: number) {
    return futuro * Math.pow(1 + tasa, -periodos);
  }

  getFA(anualidad: number, tasa: number, periodos: number) {
    return anualidad * (Math.pow(1 + tasa, periodos) - 1) / tasa;
  }

  getAF(futuro: number, tasa: number, periodos: number) {
    return futuro * tasa / (Math.pow(1 + tasa, periodos) - 1);
  }

  getPA(anualidad: number, tasa: number, periodos: number) {
    return anualidad * (Math.pow(1 + tasa, periodos) - 1) / (tasa * Math.pow(1 + tasa, periodos));
  }

  getAP(presente: number, tasa: number, periodos: number) {
    return presente * (tasa * Math.pow(1 + tasa, periodos)) / (Math.pow(1 + tasa, periodos) - 1);
  }

  private f(x: number, a: number, b: number) {
    const m = Math.max(a, b);
    const n = Math.min(a, b);
    return (x - Math.pow (x, -m)) / (x - 1) - (x - Math.pow (x, -(n - 1))) / (x - 1) ;
  }

  public getVNA(amounts: FluxModel[], int) {
    let sum = 0;
    for (let i = 0; i < amounts.length; i++) {
      sum += amounts[i].amount * this.f(int, amounts[i].from, amounts[i].to);
    }
    return sum;
  }
}
