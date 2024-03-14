import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {IAppState} from "../app.state";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import * as OrdersActions from './orders.actions';
import * as OrdersSelectors from './orders.selectors';
import {IOrders} from "./interfaces/orders.interface";

@Injectable({
  providedIn: 'root'
})
export class OrdersFacade {
  public data$: Observable<IOrders[]> = this.store.select(OrdersSelectors.selectItems);
  public loading$: Observable<boolean> = this.store.select(OrdersSelectors.selectLoading);
  public success$: Observable<boolean> = this.store.select(OrdersSelectors.selectSuccess);
  public error$: Observable<HttpErrorResponse | null> = this.store.select(OrdersSelectors.selectError);

  constructor(private store: Store<IAppState>) {}

  public loadOrdersList(): void {
    this.store.dispatch(OrdersActions.loadOrdersList());
  }

  public clearOrdersList(): void {
    this.store.dispatch(OrdersActions.loadOrdersListClear());
  }
}
