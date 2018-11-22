import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }

  getFP(presente: number, tasa: number, periodos: number) {
    return presente*Math.pow(1+tasa,periodos);
  }

  getPF(futuro: number, tasa: number, periodos: number) {
    return futuro*Math.pow(1+tasa,-periodos);
  }

  getFA(anualidad: number, tasa:number, periodos: number) {
    return anualidad*(Math.pow(1+tasa,periodos)-1)/tasa;
  }

  getAF(futuro: number, tasa:number, periodos: number){
    return futuro*tasa/(Math.pow(1+tasa,periodos)-1);
  }

  getPA(anualidad: number, tasa: number, periodos: number){
    return anualidad*(Math.pow(1+tasa,periodos)-1)/(tasa*Math.pow(1+tasa,periodos));
  }

  getAP(presente: number, tasa: number, periodos: number){
    return presente*(tasa*Math.pow(1+tasa,periodos))/(Math.pow(1+tasa,periodos)-1);
  }
}