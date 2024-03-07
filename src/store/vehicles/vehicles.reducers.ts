import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import * as VehiclesActions from './vehicles.actions';
import {IVehicleResponse} from "./interfaces/vehicles.interface";

export interface IVehiclesState {
  data: IVehicleResponse | null;
  loading: boolean;
  success: boolean;
  error: HttpErrorResponse | null;
}

const initialState: IVehiclesState = {
  data: null,
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
      data: null,
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
      data: null,
      loading: false,
      success: false,
      error: null,
    })
  )
);
