import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T extends object> {
  protected cols!: any;
  private _items!: T[];

  @Input()
  set items(items: T[]) {
    this._items = items;
    if (items && items.length > 0) {
      let colsValues: string[] = Object.keys(items[0]);
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
}
