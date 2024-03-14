import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import * as VehiclesActions from './vehicles.actions';
import {IVehicle} from "./interfaces/vehicles.interface";

export interface IVehiclesState {
  data: IVehicle[];
  loading: boolean;
  success: boolean;
  error: HttpErrorResponse | null;
}

const initialState: IVehiclesState = {
  data: [],
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
      data: [],
      loading: true,
      success: false,
      error: null,
    })
  ),
  on(
    VehiclesActions.loadVehiclesListSuccess,
    (state, action) => ({
      ...state,
      data: action.payload,
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
      data: [],
      loading: false,
      success: false,
      error: null,
    })
  )
);
