import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T extends object> {
  protected cols!: string[];
  private _items!: T[];

  @Input()
  set items(items: T[]) {
    this._items = items;
    if (items && items.length > 0) {
      this.cols = Object.keys(items[0]);
    }
  }

  get items(): T[] {
    return this._items;
  }
}
