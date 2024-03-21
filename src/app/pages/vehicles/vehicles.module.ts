import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehiclesComponent} from "./vehicles.component";
import { VehiclesRoutingModule } from './vehicles-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {ProgressBarModule} from "primeng/progressbar";
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    VehiclesComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ProgressBarModule,
    SharedModule,
    CardModule,
    ButtonModule,
  ]
})
export class VehiclesModule { }
