import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup=new FormGroup({});
  employee=new Employee();
  constructor(){
    this.registerForm=new FormGroup({
      empName:new FormControl("" , [Validators.required, Validators.minLength(2) ]),
      empSalary:new FormControl("",[Validators.required, Validators.min(0)]),
      empGender:new FormControl(""),
      empAddress:new FormControl("",[Validators.required ]),
      departmentId:new FormControl("",[Validators.required ]),
      emailId:new FormControl("",[Validators.required ]),
      password:new FormControl("",[Validators.required ]), 
      confirmPassword:new FormControl("",[Validators.required ])
    });
  }

 get ename(){
  return this.registerForm.get('empName');
 }

 get esalary(){
  return this.registerForm.get('empSalary');
 }

  collectData():void{
    console.log(this.registerForm.value);
    this.employee=this.registerForm.value;
    console.log(this.employee);
  }
}
/*
  builtin validation method(form control object){
      if value==""
      return {'required':true}
      else 
        null
  }

    builtin validation method(form control object){
      if value==""
      return {'minlength':true}
      else 
        null
  }

*/