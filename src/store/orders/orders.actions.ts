import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {IOrders} from "./interfaces/orders.interface";

export const loadOrdersList = createAction(
  '[Orders] Load Orders List',
)

export const loadOrdersListSuccess = createAction(
  '[Orders] Load Orders List Success',
  props<{ payload: IOrders[] }>(),
)

export const loadOrdersListError = createAction(
  '[Orders] Load Orders List Error',
  props<{ error: HttpErrorResponse }>()
)

export const loadOrdersListClear = createAction(
  '[Orders] Orders List Clear',
)
