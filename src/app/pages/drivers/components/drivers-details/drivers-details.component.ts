import {Component, OnInit} from '@angular/core';
import {DriversFacade} from "../../../../../store/drivers/drivers.facade";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-drivers-details',
  templateUrl: './drivers-details.component.html',
  styleUrls: ['./drivers-details.component.scss']
})
export class DriversDetailsComponent implements OnInit{
  protected driver$ = this.driversFacade.singleDriverData$;
  protected loading$ = this.driversFacade.singleDriverLoading$

  protected showEdit = false;

  constructor(
    private driversFacade: DriversFacade,
    private route: ActivatedRoute, private location: Location,
  ) {}

  protected onChangeShowEdit(event: boolean){
    this.showEdit = event;
  }

  protected returnToList(){
    this.driversFacade.clearSingleDriver();
    this.location.back();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      if (id) this.driversFacade.loadSingleDriver(id);
    })
  }
}
