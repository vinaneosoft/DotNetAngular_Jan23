import { Component, Input } from '@angular/core';
import { Department } from '../classes/department';

@Component({
  selector: 'app-dept-container',
  templateUrl: './dept-container.component.html',
  styleUrls: ['./dept-container.component.css']
})
export class DeptContainerComponent {
  @Input()   // input data is comping from parent side
  department:Department;

  constructor(){
    this.department={
      deptId:"",
      deptBudget:0,
      deptEstYear:0,
      deptName:"",
      deptImage:""
    }
  }
}
