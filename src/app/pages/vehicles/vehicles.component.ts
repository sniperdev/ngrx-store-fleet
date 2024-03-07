import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IVehicleResponse} from "../../../store/vehicles/interfaces/vehicles.interface";
import {VehiclesFacade} from "../../../store/vehicles/vehicles.facade";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit{
  protected vehicles$: Observable<IVehicleResponse | null> = this.vehiclesFacade.data$;
  protected loading$: Observable<boolean> = this.vehiclesFacade.loading$;

  constructor(private vehiclesFacade: VehiclesFacade){}

  ngOnInit() {
    this.vehiclesFacade.loadVehiclesList();
  }
}
