import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu/menu.component";
import {MainComponent} from "./main/main.component";

const routes : Routes = [{path: "menu", component: MenuComponent}, {path: "main", component: MainComponent},{ path: '', redirectTo: 'main', pathMatch: 'full' } ]


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule{}


