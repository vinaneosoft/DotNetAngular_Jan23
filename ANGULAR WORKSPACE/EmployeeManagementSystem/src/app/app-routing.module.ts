import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';

const routes: Routes = [
{ path:'home',   component:HomeComponent       },
{ path:'departments', component:DepartmentComponent },
{ path:'login', component:LoginComponent },
{ path:'register', component:RegisterComponent },
{path:'', component:HomeComponent},
{path:'**', component: ViewNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
