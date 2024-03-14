import {IAppState} from "../app.state";
import {IOrdersState} from "./orders.reducers";
import {createSelector} from "@ngrx/store";


export const selectOrders = (state: IAppState) => state.orders;


export const selectItems = createSelector(
  selectOrders,
  (state: IOrdersState) => state.data
);

export const selectLoading = createSelector(
  selectOrders,
  (state: IOrdersState) => state.loading
);

export const selectSuccess = createSelector(
  selectOrders,
  (state: IOrdersState) => state.success
);

export const selectError = createSelector(
  selectOrders,
  (state: IOrdersState) => state.error
);
