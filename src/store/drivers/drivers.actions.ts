import {createAction, props} from "@ngrx/store";
import {IDriver} from "./interfaces/drivers";
import {HttpErrorResponse} from "@angular/common/http";


export const loadDriversList = createAction(
  '[Drivers] Load Drivers List',
)

export const loadDriversListSuccess = createAction(
  '[Drivers] Load Drivers List Success',
  props<{ payload: IDriver[] }>(),
)

export const loadDriversListError = createAction(
  '[Drivers] Load Drivers List Error',
  props<{ error: HttpErrorResponse }>()
)

export const loadDriversListClear = createAction(
  '[Drivers] Drivers List Clear',
)

export const loadSingleDriver = createAction(
  '[Drivers] Load Single Driver',
  props<{ id: string }>()
)

export const loadSingleDriverSuccess = createAction(
  '[Drivers] Load Single Driver Success',
  props<{ payload: IDriver }>(),
)

export const loadSingleDriverError = createAction(
  '[Drivers] Load Single Driver Error',
  props<{ error: HttpErrorResponse }>()
)

export const loadSingleDriverClear = createAction(
  '[Drivers] Single Driver Clear',
)


export const deleteDriver = createAction(
  '[Drivers] Delete Driver',
  props<{ id: string }>()
)

export const deleteDriverSuccess = createAction(
  '[Drivers] Delete Driver Success',
)

export const deleteDriverError = createAction(
  '[Drivers] Delete Driver Error',
  props<{ error: HttpErrorResponse }>()
)
