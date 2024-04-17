import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import {DriversRoutingModule} from "./drivers-routing.module";
import {ProgressBarModule} from "primeng/progressbar";
import {SharedModule} from "../../shared/shared.module";
import { DriversFormComponent } from './components/drivers-form/drivers-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    DriversComponent,
    DriversFormComponent
  ],
  exports: [
    DriversFormComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    ProgressBarModule,
    SharedModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class DriversModule { }
