import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import { IVehicle } from 'src/store/vehicles/interfaces/vehicles.interface';
import {VehiclesFacade} from "../../../store/vehicles/vehicles.facade";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit, OnDestroy{
  protected vehicles$: Observable<IVehicle[]> = this.vehiclesFacade.data$;
  protected loading$: Observable<boolean> = this.vehiclesFacade.loading$;

  constructor(private vehiclesFacade: VehiclesFacade){}

  ngOnInit() {
    this.vehiclesFacade.loadVehiclesList();
  }

  ngOnDestroy() {
    this.vehiclesFacade.clearVehiclesList();
  }
}
