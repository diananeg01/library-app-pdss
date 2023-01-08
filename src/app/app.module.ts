import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AppRoutingModule} from "./app-routing.module";
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import {BookPanelComponent} from "./admin/admin-tab-view/book-panel/book-panel.component";
import {AdminTabViewComponent} from "./admin/admin-tab-view/admin-tab-view.component";
import {UsersPanelComponent} from "./admin/admin-tab-view/user-panel/user-panel.component";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ChipsModule} from "primeng/chips";
import {DialogModule} from "primeng/dialog";
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import {CardModule} from "primeng/card";
import {TabMenuModule} from "primeng/tabmenu";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LibraryAppComponent } from './library-app/library-app.component';
import { MenubarComponent } from './library-app/menubar/menubar.component';
import {MenubarModule} from "primeng/menubar";
import { MainPageComponent } from './library-app/menubar/main-page/main-page.component';
import { FavouritesPageComponent } from './library-app/menubar/favourites-page/favourites-page.component';
import { RequestBookPageComponent } from './library-app/menubar/request-book-page/request-book-page.component';
import {DataViewModule} from "primeng/dataview";
import {BookEndpointService} from "./endpoints/book-endpoint.service";
import {UserEndpointService} from "./endpoints/user-endpoint.service";
import {ChipModule} from "primeng/chip";
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailSignUpComponent } from './sign-up/detail-sign-up/detail-sign-up.component';
import { PersonalInformationComponent } from './sign-up/detail-sign-up/personal-information/personal-information.component';
import { ConfirmComponent } from './sign-up/detail-sign-up/confirm/confirm.component';
import {StepsModule} from "primeng/steps";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    AdminTabViewComponent,
    BookPanelComponent,
    UsersPanelComponent,
    LibraryAppComponent,
    MenubarComponent,
    MainPageComponent,
    FavouritesPageComponent,
    RequestBookPageComponent,
    SignUpComponent,
    DetailSignUpComponent,
    PersonalInformationComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    ToolbarModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ChipsModule,
    DialogModule,
    InputSwitchModule,
    FormsModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextareaModule,
    FileUploadModule,
    CardModule,
    TabMenuModule,
    MenubarModule,
    DataViewModule,
    ChipModule,
    StepsModule
  ],
  providers: [
    BookEndpointService,
    UserEndpointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
