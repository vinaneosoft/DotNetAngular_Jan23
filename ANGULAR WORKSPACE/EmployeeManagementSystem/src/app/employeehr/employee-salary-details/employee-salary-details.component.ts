import { Component } from '@angular/core';
import { EmployeeSalary } from '../employee-salary';

@Component({
  selector: 'app-employee-salary-details',
  templateUrl: './employee-salary-details.component.html',
  styleUrls: ['./employee-salary-details.component.css']
})
export class EmployeeSalaryDetailsComponent {

  salaryArray:EmployeeSalary[]=[
    new EmployeeSalary(1,34000),
    new EmployeeSalary(2,35000),
    new EmployeeSalary(3,23000),
    new EmployeeSalary(4,67000)
  ]

}
