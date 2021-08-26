import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleRoutingModule } from './core-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CoreModuleRoutingModule
  ],
  exports: [
    DashboardComponent,
    DemoComponent
  ]
})
export class CoreModuleModule { }
