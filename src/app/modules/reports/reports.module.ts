import {NgModule} from "@angular/core";
import {DetailedPageComponent} from "./pages/detailed-page/detailed-page.component";
import {TrackerRPageComponent} from "./pages/tracker-r-page/tracker-r-page.component";
import {FinalRPageComponent} from "./pages/final-r-page/final-r-page.component";
import {DetailedReportsComponent} from "./components/detailed-reports/detailed-reports.component";
import {TrackerGroupReportsComponent} from "./components/tracker-group-reports/tracker-group-reports.component";
import {FinalReportsComponent} from "./components/final-reports/final-reports.component";
import {CommonModule} from "@angular/common";
import {ReportsRoutingModule} from "./reports-routing.module";

@NgModule({
  declarations: [
    DetailedPageComponent,
    TrackerRPageComponent,
    FinalRPageComponent,
    DetailedReportsComponent,
    TrackerGroupReportsComponent,
    FinalReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule{}
