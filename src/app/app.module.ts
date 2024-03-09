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

@NgModule({
  declarations: [
    AppComponent,
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
    }),
    EffectsModule.forRoot([VehiclesEffects, DriversEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production
    }),
  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
