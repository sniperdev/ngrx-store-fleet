import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IDriversResponse} from "./interfaces/drivers";
import {Store} from "@ngrx/store";
import {IAppState} from "../app.state";
import * as DriversSelectors from './drivers.selectors';
import {HttpErrorResponse} from "@angular/common/http";
import * as DriversActions from './drivers.actions';

@Injectable({
  providedIn: 'root'
})
export class DriversFacade {
  public data$: Observable<IDriversResponse | null> = this.store.select(DriversSelectors.selectItems);
  public loading$: Observable<boolean> = this.store.select(DriversSelectors.selectLoading);
  public success$: Observable<boolean> = this.store.select(DriversSelectors.selectSuccess);
  public error$: Observable<HttpErrorResponse | null> = this.store.select(DriversSelectors.selectError);

  constructor(private store: Store<IAppState>) { }

  public loadDriversList(): void {
    this.store.dispatch(DriversActions.loadDriversList());
  }

  public clearDriversList(): void {
    this.store.dispatch(DriversActions.loadDriversListClear());
  }
}
