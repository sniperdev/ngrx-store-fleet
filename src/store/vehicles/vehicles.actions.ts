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
