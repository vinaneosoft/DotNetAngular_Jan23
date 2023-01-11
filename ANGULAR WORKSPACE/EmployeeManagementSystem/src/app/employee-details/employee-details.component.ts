import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee';
import { EmployeeCRUDService } from '../myservices/employee-crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empArray:Employee[]=[];
  constructor(private empCrud:EmployeeCRUDService, private router:Router){

  }
  ngOnInit(): void {
    // this method gets auto called
    this.getRecords();
  }

  pass(id:number){
    this.empCrud.deleteEmployee(id).subscribe(
      {
        next:successres=>{console.log(successres)},
        error:errorres=>console.log(errorres)  
      }
    );
     this.getRecords(); 
  }

  getRecords(){
    this.empCrud.getAllEmployees().subscribe(
      {
        next:successres=>this.empArray=successres as Employee[],
        error:errorres=>console.log(errorres)  
      }
    );
  }
}
