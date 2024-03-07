import { Component } from '@angular/core';
import {SidebarService} from "./sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  protected sidebarVisible$ = this.sidebarService.getSidebarVisible();

  constructor(private sidebarService: SidebarService) {}

  protected handleCloseSidebar(): void{
    this.sidebarService.setSidebarVisible(false);
  }
}
