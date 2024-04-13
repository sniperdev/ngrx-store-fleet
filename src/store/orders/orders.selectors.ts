import {IAppState} from "../app.state";
import {IOrdersState} from "./orders.reducers";
import {createSelector} from "@ngrx/store";


export const selectOrders = (state: IAppState) => state.orders;


export const selectOrdersItems = createSelector(
  selectOrders,
  (state: IOrdersState) => state.list.items
);

export const selectOrdersLoading = createSelector(
  selectOrders,
  (state: IOrdersState) => state.list.loading
);

export const selectOrdersSuccess = createSelector(
  selectOrders,
  (state: IOrdersState) => state.list.success
);

export const selectOrdersError = createSelector(
  selectOrders,
  (state: IOrdersState) => state.list.error
);

export const selectSingleOrder = createSelector(
  selectOrders,
  (state: IOrdersState) => state.details.item
);

export const selectSingleOrderLoading = createSelector(
  selectOrders,
  (state: IOrdersState) => state.details.loading
);

export const selectSingleOrderSuccess = createSelector(
  selectOrders,
  (state: IOrdersState) => state.details.success
);

export const selectSingleOrderError = createSelector(
  selectOrders,
  (state: IOrdersState) => state.details.error
);

export const selectOrderDeleteLoading = createSelector(
  selectOrders,
  (state: IOrdersState) => state.delete.loading
);

export const selectOrderDeleteSuccess = createSelector(
  selectOrders,
  (state: IOrdersState) => state.delete.success
);

export const selectOrderDeleteError = createSelector(
  selectOrders,
  (state: IOrdersState) => state.delete.error
);
