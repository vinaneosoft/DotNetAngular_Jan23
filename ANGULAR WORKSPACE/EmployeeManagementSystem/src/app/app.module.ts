import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeptContainerComponent } from './dept-container/dept-container.component';
import { OrderModule } from 'ngx-order-pipe';
import { PrefixPipe } from './cutompipes/prefix.pipe';
import { SuffixPipe } from './custompipes/suffix.pipe';
import { TestPipe } from './test.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DepartmentComponent,
    DeptContainerComponent,
    PrefixPipe,
    SuffixPipe,
    TestPipe,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ViewNotFoundComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, OrderModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
