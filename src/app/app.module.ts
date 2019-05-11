import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';

import { UserIdleModule } from 'angular-user-idle';

import { LoginComponent } from './login/login.component';
import {Globals} from './globals/globals';
import { AddNewPopComponent } from './main-content/add-new-pop/add-new-pop.component';

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
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
     MatCheckboxModule,
     ReactiveFormsModule,
     MatTableModule,
     MatDialogModule,
     MatSortModule,
     UserIdleModule.forRoot({idle: 10, timeout: 100, ping: 10})
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
  entryComponents: [AddNewPopComponent]
})
export class AppModule { }
