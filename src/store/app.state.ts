import { IVehiclesState } from './vehicles/vehicles.reducers';
import {IDriverState} from "./drivers/drivers.reducers";
import {IOrdersState} from "./orders/orders.reducers";

export interface IAppState {
  vehicles: IVehiclesState;
  drivers: IDriverState;
  orders: IOrdersState;
}
