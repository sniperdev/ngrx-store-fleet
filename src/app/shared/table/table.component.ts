import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  protected cols!: string[];
  @Input() items!: any[];

  ngOnInit() {
    this.cols = Object.keys(this.items[0]);
  }
}
