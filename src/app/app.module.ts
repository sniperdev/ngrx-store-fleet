import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {vehiclesReducer} from "../store/vehicles/vehicles.reducers";
import {EffectsModule} from "@ngrx/effects";
import {VehiclesEffects} from "../store/vehicles/vehicles.effects";
import {HttpClientModule} from "@angular/common/http";
import {driversReducer} from "../store/drivers/drivers.reducers";
import {DriversEffects} from "../store/drivers/drivers.effects";
import {ordersReducer} from "../store/orders/orders.reducers";
import {OrdersEffects} from "../store/orders/orders.effects";
import {ConfirmationService} from "primeng/api";
import { DriversDetailsComponent } from './pages/drivers/components/drivers-details/drivers-details.component';
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";

@NgModule({
  declarations: [
    AppComponent,
    DriversDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      vehicles: vehiclesReducer,
      drivers: driversReducer,
      orders: ordersReducer,
    }),
    EffectsModule.forRoot([VehiclesEffects, DriversEffects, OrdersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production
    }),
    ButtonModule,
    ProgressBarModule,

  ],
  providers: [SharedModule, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
