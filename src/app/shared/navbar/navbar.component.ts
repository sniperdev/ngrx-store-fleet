import { Component } from '@angular/core';
import {SidebarService} from "../sidebar/sidebar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarService){}

  protected sidebarToggle(): void{
    this.sidebarService.setSidebarVisible(true);
  }

  protected handleClickLogo(): void {}
}
