import {IAppState} from "../app.state";
import {IVehiclesState} from "./vehicles.reducers";
import {createSelector} from "@ngrx/store";


export const selectVehicles = (state: IAppState) => state.vehicles;


export const selectVehiclesItems = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.list.items
);

export const selectVehiclesLoading = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.list.loading
);

export const selectVehiclesSuccess = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.list.success
);

export const selectVehiclesError = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.list.error
);

export const selectSingleVehicle = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.details.item
);

export const selectSingleVehicleLoading = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.details.loading
);

export const selectSingleVehicleSuccess = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.details.success
);

export const selectSingleVehicleError = createSelector(
  selectVehicles,
  (state: IVehiclesState) => state.details.error
);
