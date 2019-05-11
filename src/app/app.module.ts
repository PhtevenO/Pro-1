import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { LoginComponent } from "./login/login.component";
import { AddNewPopComponent } from "./main-content/add-new-pop/add-new-pop.component";

import { ReactiveFormsModule } from "@angular/forms";
import { UserIdleModule } from "angular-user-idle";
import { Globals } from "./globals/globals";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    LoginComponent,
    AddNewPopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    UserIdleModule.forRoot({ idle: 10, timeout: 100, ping: 10 })
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
  entryComponents: [AddNewPopComponent]
})
export class AppModule {}
