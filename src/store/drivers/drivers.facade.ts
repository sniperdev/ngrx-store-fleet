import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../app.state";
import * as DriversSelectors from './drivers.selectors';
import {HttpErrorResponse} from "@angular/common/http";
import * as DriversActions from './drivers.actions';
import {IDriver} from "./interfaces/drivers";

@Injectable({
  providedIn: 'root'
})
export class DriversFacade {
  public driversData$: Observable<IDriver[]> = this.store.select(DriversSelectors.selectDriversItems);
  public driversLoading$: Observable<boolean> = this.store.select(DriversSelectors.selectDriversLoading);
  public driversSuccess$: Observable<boolean> = this.store.select(DriversSelectors.selectDriversSuccess);
  public driversError$: Observable<HttpErrorResponse | null> = this.store.select(DriversSelectors.selectDriversError);

  public singleDriverData$: Observable<IDriver | null> = this.store.select(DriversSelectors.selectSingleDriver);
  public singleDriverLoading$: Observable<boolean> = this.store.select(DriversSelectors.selectSingleDriverLoading);
  public singleDriverSuccess$: Observable<boolean> = this.store.select(DriversSelectors.selectSingleDriverSuccess);
  public singleDriverError$: Observable<HttpErrorResponse | null> = this.store.select(DriversSelectors.selectSingleDriverError);


  public driverDeleteLoading$: Observable<boolean> = this.store.select(DriversSelectors.selectDriversDeleteLoading);
  public driverDeleteSuccess$: Observable<boolean> = this.store.select(DriversSelectors.selectDriversDeleteSuccess);
  public driverDeleteError$: Observable<HttpErrorResponse | null> = this.store.select(DriversSelectors.selectDriversDeleteError);

  constructor(private store: Store<IAppState>) { }

  public loadDriversList(): void {
    this.store.dispatch(DriversActions.loadDriversList());
  }

  public clearDriversList(): void {
    this.store.dispatch(DriversActions.loadDriversListClear());
  }

  public loadSingleDriver(id: string): void {
    this.store.dispatch(DriversActions.loadSingleDriver({id}));
  }

  public clearSingleDriver(): void {
    this.store.dispatch(DriversActions.loadSingleDriverClear());
  }

  public deleteDriver(id: string): void {
    this.store.dispatch(DriversActions.deleteDriver({id}));
  }
}
