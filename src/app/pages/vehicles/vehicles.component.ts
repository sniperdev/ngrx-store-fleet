import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IVehicle} from "../../../store/vehicles/interfaces/vehicles.interface";
import {VehiclesFacade} from "../../../store/vehicles/vehicles.facade";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit{
  public vehicles$: Observable<IVehicle[]> = this.vehiclesFacade.items$;

  constructor(private vehiclesFacade: VehiclesFacade){}

  ngOnInit() {
    this.vehiclesFacade.loadVehiclesList();
  }
}
