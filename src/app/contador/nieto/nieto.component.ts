import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {

  contador:number= 0;
  
  /* @Input()
  contador!: number; */

  /* @Output()
  contadorCambio = new EventEmitter<number>(); */

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  /* reset() {
    this.contador = 0;
    this.contadorCambio.emit(this.contador);
  } */

  reset() {
     this.store.dispatch(actions.reset())
   }
}
