import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {

  loggedIn=false;
  empArray:Employee[]=[];
  constructor(private httpService:HttpClient) { }

  loginCheck(emailId:string,passsword:string){
    this.httpService.get("http://localhost:3000/employees").subscribe({
      next:successres=>
      {
        this.empArray=successres as Employee[];
        console.log(this.empArray);
        
        let employee=this.empArray.find(emp=>emp.emailId==emailId && emp.password==passsword)
        console.log(employee);
        
        if(employee!=null){
            this.loggedIn=true;
            console.log("in if "+this.loggedIn);
            
        }
        else{
          this.loggedIn=false;
          console.log("in else "+this.loggedIn);
        }
      }
        ,
      error:errorres=>console.log(errorres)   
    });
  }
}
