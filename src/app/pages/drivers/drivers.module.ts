import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import {DriversRoutingModule} from "./drivers-routing.module";
import {ProgressBarModule} from "primeng/progressbar";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    ProgressBarModule,
    SharedModule
  ]
})
export class DriversModule { }
