import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from "./orders.component";
import {OrdersDetailsComponent} from "./components/orders-details/orders-details.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: ':id',
    component: OrdersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
