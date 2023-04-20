import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [


{
    path: "map",
    loadChildren: () => import ("./modules/map/map.module")
      .then((m) => m.MapModule)
  },
  {
    path: "admin",
    loadChildren: () => import ("./modules/admin/admin.module")
      .then((m) => m.AdminModule)
  },
  {
    path: "reports",
    loadChildren: () => import ("./modules/reports/reports.module")
      .then((m) => m.ReportsModule)
  },

  {
    path: "auth",
    loadChildren: () => import ("./modules/authentication/authentication.module")
      .then((m) => m.AuthenticationModule)
  },
  {
    path: "auth",
    loadChildren: () => import ("./modules/authentication/authentication.module")
      .then((m) => m.AuthenticationModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
