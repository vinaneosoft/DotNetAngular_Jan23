import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../classes/employee';
import { EmployeeCRUDService } from '../myservices/employee-crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  joinsuccessMessage="";
  myEmployee=new Employee(33,"Mahesh",67000,"male","Airoli","JW","abc@gmail.com","abc");
  // later, object to display / update, we will take from backend
  myBorder="green 2px solid";
  passPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{7,15}$";
  namePattern="^[A-Za-z ]*$";
  registerForm:FormGroup=new FormGroup({});
  updateForm:FormGroup=new FormGroup({});
  employee=new Employee();
  constructor(private empCrud:EmployeeCRUDService){
    this.registerForm=new FormGroup({
      empName:new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]),
      empSalary:new FormControl("" ,[Validators.required, Validators.min(0)]),
      empGender:new FormControl(""),
      empAddress:new FormControl("",Validators.required),
      departmentId:new FormControl("",Validators.required),
      emailId:new FormControl("",[Validators.required, Validators.email ]),
      password:new FormControl("",[Validators.required, Validators.pattern(this.passPattern) ]), 
      confirmPassword:new FormControl("",[Validators.required]),
    }
    ,this.passwordMatch /* custom validator function registered on FormGroup object */
    );
    this.updateForm=new FormGroup({
      empName:new FormControl(this.myEmployee.empName, [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]),
      empSalary:new FormControl(this.myEmployee.empSalary ,[Validators.required, Validators.min(0)]),
      empGender:new FormControl(this.myEmployee.empGender),
      empAddress:new FormControl(this.myEmployee.empAddress,Validators.required),
      departmentId:new FormControl(this.myEmployee.departmentId,Validators.required),
      emailId:new FormControl(this.myEmployee.emailId,[Validators.required, Validators.email ]),
      password:new FormControl(this.myEmployee.password,[Validators.required, Validators.pattern(this.passPattern) ]), 
    }
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
    this.employee=this.registerForm.value;
   
    console.log("......data posted....");
    this.empCrud.addEmployee(this.employee).subscribe({
      next:successres=>{
        console.log(successres);
        this.joinsuccessMessage=`Hello ${this.employee.empName}, your joining is DONE!!!!!!`
      },
      error:errorres=>console.log(errorres)
    });
  }
  updateF():void{
    this.myEmployee=this.updateForm.value;
   
  
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
