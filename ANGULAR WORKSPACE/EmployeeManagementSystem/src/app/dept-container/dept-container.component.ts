import { Component, EventEmitter, Input, Output,OnInit, AfterContentInit, OnChanges } from '@angular/core';
import { Department } from '../classes/department';

@Component({
  selector: 'app-dept-container',
  templateUrl: './dept-container.component.html',
  styleUrls: ['./dept-container.component.css']
})
export class DeptContainerComponent implements OnInit,OnChanges {
  @Input()   // input data is comping from parent side
  department:Department;

  subHeading="NEOSOFT TECHNOLOGY";
  year=1980;
  array =[this.subHeading,this.year];
  @Output()
  emitter=new EventEmitter<string>();

  @Output()
  emitter2=new EventEmitter<number>();

  constructor(){
    console.log("called automatically");  
    this.department={
      deptId:"",
      deptBudget:0,
      deptEstYear:0,
      deptName:"",
      deptImage:"",
      deptEstDate:new Date()
    }
  }
  ngOnInit(): void {
    this.emitter.emit(this.subHeading);
    this.emitter2.emit(this.year);
  }
 ngOnChanges(changes:any){
  console.log(changes);
  console.log("change method called");
 }
}
