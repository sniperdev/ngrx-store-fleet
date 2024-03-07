import {Component, Input, OnInit} from '@angular/core';
import {IVehicle} from "../../../store/vehicles/interfaces/vehicles.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  protected cols!: string[];
  @Input() items!: IVehicle[];

  ngOnInit() {
    this.cols = Object.keys(this.items[0]);
  }
}
