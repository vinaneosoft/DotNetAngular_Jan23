import { Component } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emp:Employee={
    emailId:"",
    empAddress:"",
    empId:0,
    empGender:"",
    empSalary:0,
    empName:"",
    password:"",
    departmentId:""
  }
  collectData(logForm:any):void{
    console.log(logForm.value.emailId);
    console.log(logForm.value.password);
    this.emp=logForm.value as Employee;
    console.log(this.emp);
  }
}
