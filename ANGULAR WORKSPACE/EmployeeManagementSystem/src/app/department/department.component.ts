import { Component } from '@angular/core';
import { Department } from '../classes/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

 deptArray=new Array<Department>();
 deparment=new Department("LD","Learning and Development",100000,2015);
 constructor(){
   

  this.deptArray=[
    new Department("LD","Learning and Development",100000,2015),
    new Department("JW","Java Web",400000,2000),
    new Department("DN","Dot Net",500000,2000)
 ];
 }

}
