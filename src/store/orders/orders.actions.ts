import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {IOrder} from "./interfaces/orders.interface";

export const loadOrdersList = createAction(
  '[Orders] Load Orders List',
)

export const loadOrdersListSuccess = createAction(
  '[Orders] Load Orders List Success',
  props<{ payload: IOrder[] }>(),
)

export const loadOrdersListError = createAction(
  '[Orders] Load Orders List Error',
  props<{ error: HttpErrorResponse }>()
)

export const loadOrdersListClear = createAction(
  '[Orders] Orders List Clear',
)

export const loadSingleOrder = createAction(
  '[Orders] Load Single Order',
  props<{ id: string }>()
)

export const loadSingleOrderSuccess = createAction(
  '[Orders] Load Single Order Success',
  props<{ payload: IOrder }>(),
)

export const loadSingleOrderError = createAction(
  '[Orders] Load Single Order Error',
  props<{ error: HttpErrorResponse }>()
)

export const loadSingleOrderClear = createAction(
  '[Orders] Single Order Clear',
)


export const deleteOrder = createAction(
  '[Orders] Delete Order',
  props<{ id: string }>()
)

export const deleteOrderSuccess = createAction(
  '[Orders] Delete Order Success',
)

export const deleteOrderError = createAction(
  '[Orders] Delete Order Error',
  props<{ error: HttpErrorResponse }>()
)
