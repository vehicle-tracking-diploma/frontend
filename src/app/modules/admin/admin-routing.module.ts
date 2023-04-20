import {RouterModule, Routes} from "@angular/router";
import {GroupAdmComponent} from "./pages/group-adm/group-adm.component";
import {UserMgntComponent} from "./pages/user-mgnt/user-mgnt.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

const routes: Routes =[
  {path:"group", component: GroupAdmComponent},
  {path:"usermgnt", component: UserMgntComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
