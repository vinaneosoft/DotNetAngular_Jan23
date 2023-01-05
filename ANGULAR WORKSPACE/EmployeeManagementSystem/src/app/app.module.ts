import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';
import { DeptContainerComponent } from './dept-container/dept-container.component';
import { OrderModule } from 'ngx-order-pipe';
import { PrefixPipe } from './cutompipes/prefix.pipe';
import { SuffixPipe } from './custompipes/suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DepartmentComponent,
    DeptContainerComponent,
    PrefixPipe,
    SuffixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
