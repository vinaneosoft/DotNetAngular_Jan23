import { Component } from '@angular/core';
import { Employee } from '../classes/employee';
import { EmployeeCRUDService } from '../myservices/employee-crud.service';
import { LoginCheckService } from '../myservices/login-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginMessage="";
  empArray:Employee[]=[];
  constructor(private logService:LoginCheckService, private empCrud:EmployeeCRUDService){

  }
    collectData(logForm:any){
    console.log(logForm.value.emailId);
    console.log(logForm.value.password);
    this.empCrud.getAllEmployees().subscribe({
        next:successres=>{
          this.empArray=successres as Employee[];
          this.logService.loginCheck(this.empArray,logForm.value.emailId,logForm.value.password);
          if(this.logService.loggedIn)
            this.loginMessage="You are logged in Successfully...";
          else 
            this.loginMessage="Incorrect Username of password";
        },
        error:errorres=>console.log(errorres)
    });
   
  }
}
