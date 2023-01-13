import { Component } from '@angular/core';
import { Employee } from '../classes/employee';
import { LoginCheckService } from '../myservices/login-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginMessage="";
  constructor(private logService:LoginCheckService){

  }
  collectData(logForm:any):void{
    console.log(logForm.value.emailId);
    console.log(logForm.value.password);
     this.logService.loginCheck(logForm.value.emailId,logForm.value.password);
     if(this.logService.loggedIn==true)
     this.loginMessage="you are logged in successfully....";
    else
    this.loginMessage="Either username or password is incorrect";
  }
}
