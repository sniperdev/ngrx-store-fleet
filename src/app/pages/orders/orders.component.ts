import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrdersFacade} from "../../../store/orders/orders.facade";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy{
  protected orders$ = this.ordersFacade.ordersData$;
  protected loading$ = this.ordersFacade.ordersLoading$;

  constructor(private ordersFacade: OrdersFacade) {}

  ngOnInit() {
    this.ordersFacade.loadOrdersList();
  }

  ngOnDestroy() {
    this.ordersFacade.clearOrdersList();
  }
}
