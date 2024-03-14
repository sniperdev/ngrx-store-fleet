import {HttpErrorResponse} from "@angular/common/http";
import {IDriver} from "./interfaces/drivers";
import {createReducer, on} from "@ngrx/store";
import * as DriversActions from "./drivers.actions";

export interface IDriverState {
  data: IDriver[];
  loading: boolean;
  success: boolean;
  error: HttpErrorResponse | null;
}

const initialState: IDriverState = {
  data: [],
  loading: false,
  success: false,
  error: null,
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
  )
)
