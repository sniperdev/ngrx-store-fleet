import {createAction, props} from "@ngrx/store";
import {IVehicle} from "./interfaces/vehicles.interface";
import {HttpErrorResponse} from "@angular/common/http";

export const loadVehiclesList = createAction(
  '[Vehicles] Load Vehicles List',
)

export const loadVehiclesListSuccess = createAction(
  '[Vehicles] Load Vehicles List Success',
  props<{ payload: IVehicle[] }>(),
)

export const loadVehiclesListError = createAction(
  '[Vehicles] Load Vehicles List Error',
  props<{ error: HttpErrorResponse }>()
)

export const loadVehiclesListClear = createAction(
  '[Vehicles] Vehicles List Clear',
)

export const loadSingleVehicle = createAction(
  '[Vehicles] Load Single Vehicle',
  props<{ id: string }>()
)

export const loadSingleVehicleSuccess = createAction(
  '[Vehicles] Load Single Vehicle Success',
  props<{ payload: IVehicle }>(),
)

export const loadSingleVehicleError = createAction(
  '[Vehicles] Load Single Vehicle Error',
  props<{ error: HttpErrorResponse }>()
)

export const loadSingleVehicleClear = createAction(
  '[Vehicles] Single Vehicle Clear',
)


export const deleteVehicle = createAction(
  '[Vehicles] Delete Vehicle',
  props<{ id: string }>()
)

export const deleteVehicleSuccess = createAction(
  '[Vehicles] Delete Vehicle Success',
)

export const deleteVehicleError = createAction(
  '[Vehicles] Delete Vehicle Error',
  props<{ error: HttpErrorResponse }>()
)
