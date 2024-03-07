import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import * as VehiclesActions from './vehicles.actions';
import {IVehicle} from "./interfaces/vehicles.interface";

export interface IVehiclesState {
  items: IVehicle[];
  loading: boolean;
  success: boolean;
  error: HttpErrorResponse | null;
}

const initialState: IVehiclesState = {
  items: [],
  loading: false,
  success: false,
  error: null,
}

export const vehiclesReducer = createReducer(
  initialState,
  on(
    VehiclesActions.loadVehiclesList,
    state => ({
      ...state,
      items: [],
      loading: true,
      success: false,
      error: null,
    })
  ),
  on(
    VehiclesActions.loadVehiclesListSuccess,
    (state, action) => ({
      ...state,
      items: action.payload,
      loading: false,
      success: true,
    })
  ),
  on(
    VehiclesActions.loadVehiclesListError,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),
  on(
    VehiclesActions.loadVehiclesListClear,
    state => ({
      ...state,
      items: [],
      loading: false,
      success: false,
      error: null,
    })
  )
);
