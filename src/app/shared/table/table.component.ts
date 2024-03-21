import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {VehiclesFacade} from "../../../store/vehicles/vehicles.facade";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T extends object> {
  protected cols!: any;
  private _items!: T[];
  private _title!: string;

  @Input()
  set title(title: string) {
    this._title = title.toLowerCase();
  }

  @Input()
  set items(items: T[]) {
    this._items = items;
    if (items && items.length > 0) {
      let colsValues: string[] = Object.keys(items[0]).filter((col: string) => col !== 'id');
      this.cols = colsValues.map((col: string) => {
        let formattedCol = col.charAt(0).toUpperCase() + col.slice(1);
        formattedCol = formattedCol.replace(/([a-z])([A-Z])/g, '$1 $2');
        return { field: col, header: formattedCol };
      });
    }
  }

  get items(): T[] {
    return this._items;
  }

  constructor(private router: Router, private confirmationService: ConfirmationService, private vehiclesFacade: VehiclesFacade) {}

  protected openDetailsPage(id: string) {
    this.router.navigate([`/${this._title}/${id}`]);
  }

  protected deleteItem(id: string, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this item?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.vehiclesFacade.deleteVehicle(id);
      },
      reject: () => {

      }
    });
  }
}
