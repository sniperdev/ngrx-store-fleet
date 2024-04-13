import {Component, OnInit} from '@angular/core';
import {OrdersFacade} from "../../../../../store/orders/orders.facade";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit{
  protected order$ = this.ordersFacade.singleOrderData$;
  protected loading$ = this.ordersFacade.singleOrderLoading$

  constructor(private ordersFacade: OrdersFacade, private route: ActivatedRoute, private location: Location) {}

  protected returnToList(){
    this.ordersFacade.clearSingleOrder();
    this.location.back();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      if (id) this.ordersFacade.loadSingleOrder(id);
    })
  }
}
