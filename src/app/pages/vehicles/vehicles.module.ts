import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehiclesComponent} from "./vehicles.component";


const COMPONENTS = [VehiclesComponent]
@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [COMPONENTS]
})
export class VehiclesModule { }
