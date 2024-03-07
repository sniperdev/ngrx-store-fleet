import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehiclesComponent} from "./vehicles.component";
import { VehiclesRoutingModule } from './vehicles-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {ProgressBarModule} from "primeng/progressbar";



@NgModule({
  declarations: [
    VehiclesComponent
  ],
	imports: [
		CommonModule,
		VehiclesRoutingModule,
		SharedModule,
		ProgressBarModule
	]
})
export class VehiclesModule { }
