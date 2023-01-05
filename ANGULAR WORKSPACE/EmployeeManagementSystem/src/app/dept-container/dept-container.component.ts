import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { Department } from '../classes/department';

@Component({
  selector: 'app-dept-container',
  templateUrl: './dept-container.component.html',
  styleUrls: ['./dept-container.component.css']
})
export class DeptContainerComponent implements OnInit {
  @Input()   // input data is comping from parent side
  department:Department;

  subHeading="NEOSOFT TECHNOLOGY";

  @Output()
  emitter=new EventEmitter<string>();

  constructor(){
    console.log("called automatically");  
    this.department={
      deptId:"",
      deptBudget:0,
      deptEstYear:0,
      deptName:"",
      deptImage:""
    }
  }
  // 1st lifecycle
  ngOnInit(): void {
    console.log("this function gets called once");
    this.emitter.emit(this.subHeading);
  }
}
