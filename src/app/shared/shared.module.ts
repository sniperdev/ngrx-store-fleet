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
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {ConfirmPopupModule} from "primeng/confirmpopup";


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
    InputTextModule,
    FormsModule,
    RippleModule,
    ConfirmPopupModule,
  ],
  exports: [
    COMPONENTS,
    TableComponent,
    PagecardComponent,
  ]
})
export class SharedModule {}
