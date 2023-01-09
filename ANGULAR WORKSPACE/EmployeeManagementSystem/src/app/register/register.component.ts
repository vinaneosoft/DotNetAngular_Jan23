import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myBorder="green 2px solid";
  passPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{7,15}$";
  namePattern="^[A-Za-z ]*$";
  registerForm:FormGroup=new FormGroup({});
  employee=new Employee();
  constructor(){
    this.registerForm=new FormGroup({
      empName:new FormControl("" , [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]),
      empSalary:new FormControl("",[Validators.required, Validators.min(0)]),
      empGender:new FormControl(""),
      empAddress:new FormControl("",Validators.required),
      departmentId:new FormControl("",Validators.required),
      emailId:new FormControl("",[Validators.required, Validators.email ]),
      password:new FormControl("",[Validators.required, Validators.pattern(this.passPattern) ]), 
      confirmPassword:new FormControl("",[Validators.required]),
    }
    ,this.passwordMatch /* custom validator function registered on FormGroup object */
    );
  }

  get deptId(){
    return this.registerForm.get('departmentId');
   }
  
 get ename(){
  return this.registerForm.get('empName');
 }

 get esalary(){
  return this.registerForm.get('empSalary');
 }

 get eaddress(){
  return this.registerForm.get('empAddress');
 }

 get eemail(){
  return this.registerForm.get('emailId');
 }

 get epass(){
  return this.registerForm.get('password');
 }
 get econfirmpass(){
  return this.registerForm.get('confirmPassword');
 }


  collectData():void{
    console.log(this.registerForm.value);
    this.employee=this.registerForm.value;
    console.log(this.employee);
  }
  private passwordMatch(regForm:AbstractControl)
  {   // special custom validator function
  
     let passNode=regForm.get('password');
     let cPassNode=regForm.get('confirmPassword');
 
      if(passNode?.value==cPassNode?.value)
        return null
      else  
        return {'passMatch':true};
  }

  nodeType="password";
  showP(event:any):void{
      if(event.target.checked)
        this.nodeType="text";
      else
       this.nodeType="password";
  }

  myEmployee=new Employee(33,"Mahesh",67000,"male","abc","JW","abc@gmail.com","abc");
  update(form:any){
    console.log(this.myEmployee);
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
      if length<.....
      return {'minlength':true}
      else 
        null
  }


*/
