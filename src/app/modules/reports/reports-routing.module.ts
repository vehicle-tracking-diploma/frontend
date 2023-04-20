import {RouterModule, Routes} from "@angular/router";
import {DetailedPageComponent} from "./pages/detailed-page/detailed-page.component";
import {TrackerRPageComponent} from "./pages/tracker-r-page/tracker-r-page.component";
import {FinalRPageComponent} from "./pages/final-r-page/final-r-page.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

const routes: Routes =[
  {path:"detailed-reports", component: DetailedPageComponent},
  {path:"tracker-reports", component: TrackerRPageComponent},
  {path:"final-reports", component: FinalRPageComponent},
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
export class ReportsRoutingModule { }
