import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleRoutingModule } from './core-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemoComponent,
    DashboardComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    CoreModuleRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    DemoComponent
  ]
})
export class CoreModuleModule { }
