import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import {OrdersRoutingModule} from "./orders-routing.module";
import {ProgressBarModule} from "primeng/progressbar";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ProgressBarModule,
    SharedModule
  ]
})
export class OrdersModule { }
