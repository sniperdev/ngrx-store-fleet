import {createSelector} from "@ngrx/store";
import {IAppState} from "../app.state";
import {IDriverState} from "./drivers.reducers";


export const selectDrivers = (state: IAppState) => state.drivers;


export const selectDriversItems = createSelector(
  selectDrivers,
  (state: IDriverState) => state.list.items
);

export const selectDriversLoading = createSelector(
  selectDrivers,
  (state: IDriverState) => state.list.loading
);

export const selectDriversSuccess = createSelector(
  selectDrivers,
  (state: IDriverState) => state.list.success
);

export const selectDriversError = createSelector(
  selectDrivers,
  (state: IDriverState) => state.list.error
);

export const selectSingleDriver = createSelector(
  selectDrivers,
  (state: IDriverState) => state.details.item
)

export const selectSingleDriverLoading = createSelector(
  selectDrivers,
  (state: IDriverState) => state.details.loading
)

export const selectSingleDriverSuccess = createSelector(
  selectDrivers,
  (state: IDriverState) => state.delete.success
)

export const selectSingleDriverError = createSelector(
  selectDrivers,
  (state: IDriverState) => state.details.error
);

export const selectDriversDeleteLoading = createSelector(
  selectDrivers,
  (state: IDriverState) => state.delete.loading
);

export const selectDriversDeleteSuccess = createSelector(
  selectDrivers,
  (state: IDriverState) => state.delete.success
);

export const selectDriversDeleteError = createSelector(
  selectDrivers,
  (state: IDriverState) => state.delete.error
);
