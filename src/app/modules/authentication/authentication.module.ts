import {NgModule} from "@angular/core";
import {AuthenticationComponent} from "./pages/authentication/authentication.component";
import {AuthComponent} from "./components/auth/auth.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: '', component: AuthenticationComponent}
      ]
    ),
    FormsModule
  ]
})
export class AuthenticationModule {
}
