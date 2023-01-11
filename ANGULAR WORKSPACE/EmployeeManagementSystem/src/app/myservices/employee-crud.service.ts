import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {

  constructor(private httpService:HttpClient) {

   }

   addEmployee(emp:Employee){
        return this.httpService.post("http://localhost:3000/employees",emp); // json object
   }

   getAllEmployees(){
      return this.httpService.get("http://localhost:3000/employees");
   }






}
