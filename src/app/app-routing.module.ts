import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookPanelComponent} from "./admin/admin-tab-view/book-panel/book-panel.component";
import {UsersPanelComponent} from "./admin/admin-tab-view/user-panel/user-panel.component";
import {AdminTabViewComponent} from "./admin/admin-tab-view/admin-tab-view.component";

const routes : Routes = [
  { path: ':username/admin', component: AdminTabViewComponent, children: [
    { path: 'books', component: BookPanelComponent },
    { path: 'users', component: UsersPanelComponent },
    { path: '**', redirectTo: 'books', pathMatch: 'full' }
  ]}
]



@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule{}


