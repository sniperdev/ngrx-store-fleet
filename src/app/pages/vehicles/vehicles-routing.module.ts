import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import {VehicleDetailsComponent} from "./components/vehicle-details/vehicle-details.component";

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent
  },
  {
    path: ':id',
    component: VehicleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
