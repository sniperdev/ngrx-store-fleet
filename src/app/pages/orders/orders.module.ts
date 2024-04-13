import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import {OrdersRoutingModule} from "./orders-routing.module";
import {ProgressBarModule} from "primeng/progressbar";
import {SharedModule} from "../../shared/shared.module";
import { OrdersDetailsComponent } from './components/orders-details/orders-details.component';
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    OrdersComponent,
    OrdersDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ProgressBarModule,
    SharedModule,
    ButtonModule
  ]
})
export class OrdersModule { }
