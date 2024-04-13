import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {IAppState} from "../app.state";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import * as OrdersActions from './orders.actions';
import * as OrdersSelectors from './orders.selectors';
import {IOrder} from "./interfaces/orders.interface";

@Injectable({
  providedIn: 'root'
})
export class OrdersFacade {
  public ordersData$: Observable<IOrder[]> = this.store.select(OrdersSelectors.selectOrdersItems);
  public ordersLoading$: Observable<boolean> = this.store.select(OrdersSelectors.selectOrdersLoading);
  public ordersSuccess: Observable<boolean> = this.store.select(OrdersSelectors.selectOrdersSuccess);
  public ordersError$: Observable<HttpErrorResponse | null> = this.store.select(OrdersSelectors.selectOrdersError);

  public singleOrderData$: Observable<IOrder | null> = this.store.select(OrdersSelectors.selectSingleOrder);
  public singleOrderLoading$: Observable<boolean> = this.store.select(OrdersSelectors.selectSingleOrderLoading);
  public singleOrderSuccess$: Observable<boolean> = this.store.select(OrdersSelectors.selectSingleOrderSuccess);
  public singleOrderError$: Observable<HttpErrorResponse | null> = this.store.select(OrdersSelectors.selectSingleOrderError);


  public orderDeleteLoading$: Observable<boolean> = this.store.select(OrdersSelectors.selectOrderDeleteLoading);
  public orderDeleteSuccess$: Observable<boolean> = this.store.select(OrdersSelectors.selectOrderDeleteSuccess);
  public orderDeleteError$: Observable<HttpErrorResponse | null> = this.store.select(OrdersSelectors.selectOrderDeleteError);

  constructor(private store: Store<IAppState>) {}

  public loadOrdersList(): void {
    this.store.dispatch(OrdersActions.loadOrdersList());
  }

  public clearOrdersList(): void {
    this.store.dispatch(OrdersActions.loadOrdersListClear());
  }

  public loadSingleOrder(id: string): void {
    this.store.dispatch(OrdersActions.loadSingleOrder({id}));
  }

  public clearSingleOrder(): void {
    this.store.dispatch(OrdersActions.loadSingleOrderClear());
  }

  public deleteOrder(id: string): void {
    this.store.dispatch(OrdersActions.deleteOrder({id}));
  }
}
