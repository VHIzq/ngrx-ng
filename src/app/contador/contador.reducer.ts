import { Action, createReducer, on } from "@ngrx/store"
import { decrementar, dividir, incrementar, multiplicar, reset } from './contador.actions';

/* export function contadorReducer(state: number = 10, action: Action) {
  switch (action.type) {
    
    case incrementar.type:
      return state + 1;
    
    case decrementar.type:
      return state - 1;
    default:
      return state;
  }
} */
//*1. crea el estado inicial del componente
export const initialState = 10;

//*  crea una funcion privada 
const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (state) => initialState)
);

//* esta funcion expone y usa el reducer con el state y la action creada arriba

export function contadorReducer(state: number = initialState, action: Action) {
  return _contadorReducer(state, action)
};

