import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{    path:'home',   component:HomeComponent       },
{ path:'departments', component:DepartmentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
