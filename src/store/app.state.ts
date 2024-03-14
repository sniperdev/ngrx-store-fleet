import { IVehiclesState } from './vehicles/vehicles.reducers';
import {IDriverState} from "./drivers/drivers.reducers";

export interface IAppState {
  vehicles: IVehiclesState;
  drivers: IDriverState;
}
