import {NgModule} from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from "primeng/sidebar";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import { CardComponent } from './card/card.component';
import {CardModule} from "primeng/card";
import { TableComponent } from './table/table.component';
import {TableModule} from "primeng/table";


const COMPONENTS = [NavbarComponent, SidebarComponent, CardComponent];
@NgModule({
  declarations: [
    COMPONENTS,
    TableComponent,
  ],
  imports: [
    MenubarModule,
    ButtonModule,
    SidebarModule,
    AsyncPipe,
    NgIf,
    CardModule,
    TableModule,
    NgForOf
  ],
  exports: [
    COMPONENTS,
    TableComponent,
  ]
})
export class SharedModule {}
