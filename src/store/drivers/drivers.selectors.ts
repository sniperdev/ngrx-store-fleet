import {createSelector} from "@ngrx/store";
import {IAppState} from "../app.state";
import {IDriverState} from "./drivers.reducers";



export const selectDrivers = (state: IAppState) => state.drivers;


export const selectItems = createSelector(
  selectDrivers,
  (state: IDriverState) => state.data
);

export const selectLoading = createSelector(
  selectDrivers,
  (state: IDriverState) => state.loading
);

export const selectSuccess = createSelector(
  selectDrivers,
  (state: IDriverState) => state.success
);

export const selectError = createSelector(
  selectDrivers,
  (state: IDriverState) => state.error
);
