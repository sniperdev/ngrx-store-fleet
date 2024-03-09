import {createSelector} from "@ngrx/store";
import {IAppState} from "../app.state";
import {IDriversState} from "./drivers.reducers";



export const selectDrivers = (state: IAppState) => state.drivers;


export const selectItems = createSelector(
  selectDrivers,
  (state: IDriversState) => state.data
);

export const selectLoading = createSelector(
  selectDrivers,
  (state: IDriversState) => state.loading
);

export const selectSuccess = createSelector(
  selectDrivers,
  (state: IDriversState) => state.success
);

export const selectError = createSelector(
  selectDrivers,
  (state: IDriversState) => state.error
);
