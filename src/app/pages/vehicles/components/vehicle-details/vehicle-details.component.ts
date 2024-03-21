import {Component, OnInit} from '@angular/core';
import {VehiclesFacade} from "../../../../../store/vehicles/vehicles.facade";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit{
  protected vehicle$ = this.vehiclesFacade.singleVehicleData$;
  protected loading$ = this.vehiclesFacade.singleVehicleLoading$;

  constructor(private vehiclesFacade: VehiclesFacade, private route: ActivatedRoute, private location: Location) {}

  protected returnToList(){
    this.vehiclesFacade.clearSingleVehicle();
    this.location.back();
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      if (id) this.vehiclesFacade.loadSingleVehicle(id);
    });
  }
}
