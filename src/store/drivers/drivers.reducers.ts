import {HttpErrorResponse} from "@angular/common/http";
import {IDriver} from "./interfaces/drivers";
import {createReducer, on} from "@ngrx/store";
import * as DriversActions from "./drivers.actions";

export interface IDriverState {
  list: {
    items: IDriver[],
    loading: boolean;
    success: boolean;
    error: HttpErrorResponse | null;
  },
  details: {
    item: IDriver | null;
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

const initialState: IDriverState = {
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

export const driversReducer = createReducer(
  initialState,
  on(
    DriversActions.loadDriversList,
    state =>({
      ...state,
      data: [],
      loading: true,
      success: false,
      error: null,
    })
  ),
  on(
    DriversActions.loadDriversListSuccess,
    (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
      success: true,
    })
  ),
  on(
    DriversActions.loadDriversListError,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),
  on(
    DriversActions.loadDriversListClear,
    state => ({
      ...state,
      data: [],
      loading: false,
      success: false,
      error: null,
    })
  ),


  on(
    DriversActions.loadSingleDriver,
    state => ({
      ...state,
      details: {
        ...state.details,
        loading: true,
      }
    })
  ),
  on(
    DriversActions.loadSingleDriverSuccess,
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
    DriversActions.loadSingleDriverError,
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
    DriversActions.loadSingleDriverClear,
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


  on(
    DriversActions.deleteDriver,
    state => ({
      ...state,
      delete: {
        ...state.delete,
        loading: true,
      }
    })
  ),
  on(
    DriversActions.deleteDriverSuccess,
    state => ({
      ...state,
      delete: {
        ...state.delete,
        loading: false,
        success: true,
      }
    })
  ),
  on(
    DriversActions.deleteDriverError,
    (state, action) => ({
      ...state,
      delete: {
        ...state.delete,
        loading: false,
        error: action.error,
      }
    })
  ),
)
