import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vehicles',
    pathMatch: 'full'
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./pages/vehicles/vehicles.module').then((m) => m.VehiclesModule)
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./pages/drivers/drivers.module').then((m) => m.DriversModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
