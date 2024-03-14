import {NgModule} from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from "primeng/sidebar";
import {AsyncPipe, CommonModule} from "@angular/common";
import { CardComponent } from './card/card.component';
import {CardModule} from "primeng/card";
import { TableComponent } from './table/table.component';
import {TableModule} from "primeng/table";
import { PagecardComponent } from './pagecard/pagecard.component';
import {FileUploadModule} from "primeng/fileupload";


const COMPONENTS = [NavbarComponent, SidebarComponent, CardComponent];
@NgModule({
  declarations: [
    COMPONENTS,
    TableComponent,
    PagecardComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    SidebarModule,
    AsyncPipe,
    CardModule,
    TableModule,
    FileUploadModule,
  ],
  exports: [
    COMPONENTS,
    TableComponent,
    PagecardComponent,
  ]
})
export class SharedModule {}
