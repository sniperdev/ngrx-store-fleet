import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import * as OrdersActions from './orders.actions';
import {IOrders} from "./interfaces/orders.interface";

export interface IOrdersState {
  data: IOrders[];
  loading: boolean;
  success: boolean;
  error: HttpErrorResponse | null;
}

const initialState: IOrdersState = {
  data: [],
  loading: false,
  success: false,
  error: null,
}

export const ordersReducer = createReducer(
  initialState,
  on(
    OrdersActions.loadOrdersList,
    state => ({
      ...state,
      data: [],
      loading: true,
      success: false,
      error: null,
    })
  ),
  on(
    OrdersActions.loadOrdersListSuccess,
    (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
      success: true,
    })
  ),
  on(
    OrdersActions.loadOrdersListError,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),
  on(
    OrdersActions.loadOrdersListClear,
    state => ({
      ...state,
      data: [],
      loading: false,
      success: false,
      error: null,
    })
  )
);
