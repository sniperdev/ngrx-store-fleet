import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import * as VehiclesActions from './vehicles.actions';
import {IVehicle} from "./interfaces/vehicles.interface";


export interface IVehiclesState {
  list: {
    items: IVehicle[],
    loading: boolean;
    success: boolean;
    error: HttpErrorResponse | null;
  },
  details: {
    item: IVehicle | null;
    loading: boolean;
    success: boolean;
    error: HttpErrorResponse | null;
  },
  add: {
    loading: boolean;
    success: boolean;
    error: HttpErrorResponse | null;
  },
  delete: {
    loading: boolean;
    success: boolean;
    error: HttpErrorResponse | null;
  },
  update: {
    loading: boolean;
    success: boolean;
    error: HttpErrorResponse | null;
  },
}

const initialState: IVehiclesState = {
  list: {
    items: [],
    loading: false,
    success: false,
    error: null,
  },
  details: {
    item: null,
    loading: false,
    success: false,
    error: null,
  },
  add: {
    loading: false,
    success: false,
    error: null,
  },
  delete: {
    loading: false,
    success: false,
    error: null,
  },
  update: {
    loading: false,
    success: false,
    error: null,
  },
}

export const vehiclesReducer = createReducer(
  initialState,
  on(
    VehiclesActions.loadVehiclesList,
    state => ({
      ...state,
      list:{
        ...state.list,
        loading: true,
      }
    })
  ),
  on(
    VehiclesActions.loadVehiclesListSuccess,
    (state, action) => ({
      ...state,
      list:{
        ...state.list,
        items: action.payload,
        success: true,
        loading: false,
      }
    })
  ),
  on(
    VehiclesActions.loadVehiclesListError,
    (state, action) => ({
      ...state,
      list:{
        ...state.list,
        loading: false,
        error: action.error,
      }
    })
  ),
  on(
    VehiclesActions.loadVehiclesListClear,
    state => ({
      ...state,
      list:{
        items: [],
        loading: false,
        success: false,
        error: null,
      }
    })
  ),


  on(
    VehiclesActions.loadSingleVehicle,
    state => ({
      ...state,
      details: {
        ...state.details,
        loading: true,
      }
    })
  ),
  on(
    VehiclesActions.loadSingleVehicleSuccess,
    (state, action) => ({
      ...state,
      details: {
        ...state.details,
        item: action.payload,
        loading: false,
        success: true,
      },
    })
  ),
  on(
    VehiclesActions.loadSingleVehicleError,
    (state, action) => ({
      ...state,
      details: {
        ...state.details,
        loading: false,
        error: action.error,
      }
    })
  ),
  on(
    VehiclesActions.loadSingleVehicleClear,
    state => ({
      ...state,
      details: {
        item: null,
        loading: false,
        success: false,
        error: null,
      }
    })
  ),
);
