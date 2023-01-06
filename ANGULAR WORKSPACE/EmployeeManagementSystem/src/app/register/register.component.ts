import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup=new FormGroup({});

  constructor(){
    this.registerForm=new FormGroup({
      empName:new FormControl(),
      empSalary:new FormControl(),
      empGender:new FormControl(),
      empAddress:new FormControl(),
      departmentId:new FormControl()
    });
  }
}
