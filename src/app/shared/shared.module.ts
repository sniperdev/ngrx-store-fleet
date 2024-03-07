import {NgModule} from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from "primeng/sidebar";
import {AsyncPipe, NgIf} from "@angular/common";
import { CardComponent } from './card/card.component';
import {CardModule} from "primeng/card";


const COMPONENTS = [NavbarComponent, SidebarComponent, CardComponent];
@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    MenubarModule,
    ButtonModule,
    SidebarModule,
    AsyncPipe,
    NgIf,
    CardModule
  ],
  exports: [
    COMPONENTS,
  ]
})
export class SharedModule {}
