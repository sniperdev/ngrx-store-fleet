import { Component } from '@angular/core';
import {SidebarService} from "./sidebar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  protected sidebarVisible$ = this.sidebarService.getSidebarVisible();

  constructor(private sidebarService: SidebarService, private router: Router) {}

  protected handleCloseSidebar(): void{
    this.sidebarService.setSidebarVisible(false);
  }

  protected navigateTo(url: string): void {
    this.sidebarService.setSidebarVisible(false);
    this.router.navigate([url]);
  }
}
