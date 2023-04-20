import {NgModule} from "@angular/core";
import {GroupAdmComponent} from "./pages/group-adm/group-adm.component";
import {UserMgntComponent} from "./pages/user-mgnt/user-mgnt.component";
import {TableComponent} from "./components/table/table.component";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
  declarations: [
    GroupAdmComponent,
    UserMgntComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
