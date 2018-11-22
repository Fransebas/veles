import {Output, Component, OnInit, EventEmitter} from '@angular/core';
import {FluxModel} from '../Models/FluxModel';

@Component({
  selector: 'app-flux',
  templateUrl: './flux.component.html',
  styleUrls: ['./flux.component.css']
})
export class FluxComponent implements OnInit {

  @Output() changeModel: EventEmitter<FluxModel> = new EventEmitter();
  model: FluxModel = new FluxModel();


  constructor() {

  }

  ngOnInit() {
  }

  public onChange() {
    this.changeModel.emit(this.model);
  }

}
