import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookPanelComponent} from "./admin/admin-tab-view/book-panel/book-panel.component";
import {UsersPanelComponent} from "./admin/admin-tab-view/user-panel/user-panel.component";
import {AdminTabViewComponent} from "./admin/admin-tab-view/admin-tab-view.component";
import {LibraryAppComponent} from "./library-app/library-app.component";
import {MainPageComponent} from "./library-app/menubar/main-page/main-page.component";
import {FavouritesPageComponent} from "./library-app/menubar/favourites-page/favourites-page.component";
import {RequestBookPageComponent} from "./library-app/menubar/request-book-page/request-book-page.component";

const routes : Routes = [
  { path: ':username/main-page', component: LibraryAppComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: 'all-books', component: MainPageComponent },
      { path: 'favourite-books', component: FavouritesPageComponent },
      { path: 'request-book', component: RequestBookPageComponent },
      { path: '**', redirectTo: 'all-books', pathMatch: 'full' }
    ]
  },
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


