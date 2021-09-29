import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reactive', component: ReactiveFormsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'uList', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreModuleRoutingModule { }
