import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {IAppState} from "../app.state";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IVehicle} from "./interfaces/vehicles.interface";
import * as VehiclesActions from './vehicles.actions';
import * as VehiclesSelectors from './vehicles.selectors';

@Injectable({
  providedIn: 'root'
})
export class VehiclesFacade {
  public vehiclesData$: Observable<IVehicle[]> = this.store.select(VehiclesSelectors.selectVehiclesItems);
  public vehiclesLoading$: Observable<boolean> = this.store.select(VehiclesSelectors.selectVehiclesLoading);
  public vehiclesSuccess: Observable<boolean> = this.store.select(VehiclesSelectors.selectVehiclesSuccess);
  public vehiclesError$: Observable<HttpErrorResponse | null> = this.store.select(VehiclesSelectors.selectVehiclesError);

  public singleVehicleData$: Observable<IVehicle | null> = this.store.select(VehiclesSelectors.selectSingleVehicle);
  public singleVehicleLoading$: Observable<boolean> = this.store.select(VehiclesSelectors.selectSingleVehicleLoading);
  public singleVehicleSuccess$: Observable<boolean> = this.store.select(VehiclesSelectors.selectSingleVehicleSuccess);
  public singleVehicleError$: Observable<HttpErrorResponse | null> = this.store.select(VehiclesSelectors.selectSingleVehicleError);

  constructor(private store: Store<IAppState>) {}

  public loadVehiclesList(): void {
    this.store.dispatch(VehiclesActions.loadVehiclesList());
  }

  public clearVehiclesList(): void {
    this.store.dispatch(VehiclesActions.loadVehiclesListClear());
  }

  public loadSingleVehicle(id: string): void {
    this.store.dispatch(VehiclesActions.loadSingleVehicle({id}));
  }

  public clearSingleVehicle(): void {
    this.store.dispatch(VehiclesActions.loadSingleVehicleClear());
  }
}
