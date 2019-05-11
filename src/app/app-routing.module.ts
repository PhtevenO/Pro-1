import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [

      {
        path: 'main',
        component: MainContentComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: LoginComponent
      },
      { path: '**', redirectTo: 'login', pathMatch: 'full'}
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
