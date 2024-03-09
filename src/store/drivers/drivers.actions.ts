import {createAction, props} from "@ngrx/store";
import {IDriversResponse} from "./interfaces/drivers";
import {HttpErrorResponse} from "@angular/common/http";


export const loadDriversList = createAction(
  '[Drivers] Load Drivers List',
)

export const loadDriversListSuccess = createAction(
  '[Drivers] Load Drivers List Success',
  props<{ payload: IDriversResponse }>(),
)

export const loadDriversListError = createAction(
  '[Drivers] Load Drivers List Error',
  props<{ error: HttpErrorResponse }>()
)

export const loadDriversListClear = createAction(
  '[Drivers] Drivers List Clear',
)
