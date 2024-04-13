import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import * as OrdersActions from './orders.actions';
import {IOrder} from "./interfaces/orders.interface";

export interface IOrdersState {
  list: {
    items: IOrder[],
    loading: boolean;
    success: boolean;
    error: HttpErrorResponse | null;
  },
  details: {
    item: IOrder | null;
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

const initialState: IOrdersState = {
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

export const ordersReducer = createReducer(
  initialState,
  on(
    OrdersActions.loadOrdersList,
    state => ({
      ...state,
      list:{
        ...state.list,
        loading: true,
      }
    })
  ),
  on(
    OrdersActions.loadOrdersListSuccess,
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
    OrdersActions.loadOrdersListError,
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
    OrdersActions.loadOrdersListClear,
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
    OrdersActions.loadSingleOrder,
    state => ({
      ...state,
      details: {
        ...state.details,
        loading: true,
      }
    })
  ),
  on(
    OrdersActions.loadSingleOrderSuccess,
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
    OrdersActions.loadSingleOrderError,
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
    OrdersActions.loadSingleOrderClear,
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
    OrdersActions.deleteOrder,
    state => ({
      ...state,
      delete: {
        ...state.delete,
        loading: true,
      }
    })
  ),
  on(
    OrdersActions.deleteOrderSuccess,
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
    OrdersActions.deleteOrderError,
    (state, action) => ({
      ...state,
      delete: {
        ...state.delete,
        loading: false,
        error: action.error,
      }
    })
  ),
);
