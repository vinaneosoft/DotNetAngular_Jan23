import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {

  loggedIn=false;
  constructor(private httpService:HttpClient) { }

  loginCheck(empArray:Employee[], emailId:string,passsword:string){
    let employee=empArray.find(emp=>emp.emailId==emailId && emp.password==passsword)
    console.log(employee);   
    if(employee!=null)
        this.loggedIn=true;
}
 
}
