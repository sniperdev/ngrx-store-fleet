import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DriversComponent} from "./drivers.component";
import {DriversDetailsComponent} from "./components/drivers-details/drivers-details.component";

const routes: Routes = [
  {
    path: '',
    component: DriversComponent
  },
  {
    path: ':id',
    component: DriversDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
