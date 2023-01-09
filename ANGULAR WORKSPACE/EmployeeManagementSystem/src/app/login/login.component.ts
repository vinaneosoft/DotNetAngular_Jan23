import { Component } from '@angular/core';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  collectData(logForm:any):void{
    console.log(logForm.value.emailId);
    console.log(logForm.value.password);
  }
}
