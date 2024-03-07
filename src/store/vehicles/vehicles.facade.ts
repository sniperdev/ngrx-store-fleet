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
  public items$: Observable<IVehicle[]> = this.store.select(VehiclesSelectors.selectItems);
  public loading$: Observable<boolean> = this.store.select(VehiclesSelectors.selectLoading);
  public success$: Observable<boolean> = this.store.select(VehiclesSelectors.selectSuccess);
  public error$: Observable<HttpErrorResponse | null> = this.store.select(VehiclesSelectors.selectError);

  constructor(private store: Store<IAppState>) {
  }

  public loadVehiclesList(): void {
    this.store.dispatch(VehiclesActions.loadVehiclesList());
  }

  public clearVehiclesList(): void {
    this.store.dispatch(VehiclesActions.loadVehiclesListClear());
  }
}
