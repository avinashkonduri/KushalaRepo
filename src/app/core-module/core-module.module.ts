import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleRoutingModule } from './core-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    DemoComponent,
    DashboardComponent,
    ReactiveFormsComponent,
    LoginComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    CoreModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    DemoComponent
  ]
})
export class CoreModuleModule { }
