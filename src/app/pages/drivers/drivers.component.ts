import {Component, OnDestroy, OnInit} from '@angular/core';
import { DriversFacade } from 'src/store/drivers/drivers.facade';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, OnDestroy{
  protected drivers$ = this.driversFacade.data$;
  protected loading$ = this.driversFacade.loading$;

  constructor(private driversFacade: DriversFacade) {}

  ngOnInit() {
    this.driversFacade.loadDriversList();
  }

  ngOnDestroy() {
    this.driversFacade.clearDriversList();
  }
}
