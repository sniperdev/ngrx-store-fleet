import { IVehiclesState } from './vehicles/vehicles.reducers';
import {IDriversState} from "./drivers/drivers.reducers";

export interface IAppState {
  vehicles: IVehiclesState;
  drivers: IDriversState;
}
