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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { MathComponent } from './math/math.component';
import { OperationComponent } from './operation/operation.component';
import { MathsService } from './myservices/maths.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { FootersectionComponent } from './footersection/footersection.component';
import { AuthServiceService } from './myservices/auth-service.service';
import { EmployeeCRUDService } from './myservices/employee-crud.service';
import { LoginCheckService } from './myservices/login-check.service';
import { TestComponent } from './test/test.component';
import { EmployeehrModule } from "./employeehr/employeehr.module";
import { Incterceptor1Service } from './myservices/incterceptor1.service';
import { Interceptor2Service } from './myservices/interceptor2.service';
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
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ViewNotFoundComponent,
        CompanyDetailsComponent,
        MathComponent,
        OperationComponent,
        EmployeeDetailsComponent,
        FootersectionComponent,
        TestComponent
    ],
    providers: [MathsService, AuthServiceService, EmployeeCRUDService, 
        LoginCheckService,
        {
            provide:HTTP_INTERCEPTORS,
            useClass:Incterceptor1Service,
            multi:true
        },
        {
            provide:HTTP_INTERCEPTORS,
            useClass:Interceptor2Service,
            multi:true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, FormsModule, OrderModule, ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule, MatSlideToggleModule, MatButtonModule, MatIconModule,
        MatCheckboxModule, MatTableModule,
        EmployeehrModule
    ]
})
export class AppModule { }
