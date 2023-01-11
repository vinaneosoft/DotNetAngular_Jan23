import { Component, OnInit } from '@angular/core';
import { EmployeeCRUDService } from '../myservices/employee-crud.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private empCrud:EmployeeCRUDService){

  }
  ngOnInit(): void {
    // this method gets auto called
    this.empCrud.getAllEmployees().subscribe(
      {
        next:successres=>console.log(successres),
        error:errorres=>console.log(errorres)
        
      }
    );
  }

}
