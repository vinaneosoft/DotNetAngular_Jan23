import { Component } from '@angular/core';
import { Department } from '../classes/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
title="Employee Management System";
age=0;
counter=0;
colorArray=['green','blue','red','pink','yellow'];
fromChild="";
eyear=0;
myStyle={
  borderColor:'gray',
  borderStyle:'double',
  borderWidth:'10px',
  backgroundColor:'pink'
 }
 
 deptArray=new Array<Department>();
 deparment=new Department("LD","Learning and Development",100000,2015, "https://picsum.photos/id/560/200/300", new Date('23 Nov 2015'));
 constructor(){
  this.deptArray=[
    new Department("LD","learning and Research",100000.56478,2015, "https://picsum.photos/id/560/200/300", new Date('23 Nov 2015')),
    new Department("JW","Java web",400000.5467,2000,  "https://picsum.photos/id/564/200/300",new Date('13 Aug 2000')),
    new Department("DN","Dot-nEt",500000.7675436,2000,  "https://picsum.photos/id/562/200/300",new Date('22 Aug 2000')),
    new Department("HR","human Resource",500000.5,2001,  "https://picsum.photos/id/564/200/300",new Date('22 Aug 2001'))
  ];
 setTimeout(()=>this.deparment.deptName="Design Department", 6000);
 let interval1=setInterval(()=>{
  this.changeBorderColor()
},1000);
 }

 changeBorderColor(){
  this.myStyle.borderColor=this.colorArray[this.counter];
  this.counter++;
  if(this.counter==this.colorArray.length)
  this.counter=0;
 }

 display():void{
  console.log("Field focused");
  console.log(this.deparment);
 }

 pass(node:any){
  console.log(node);
 }
 addDeparment(id:string,name:string,budget:string,year:string):void{
  console.log(id+" "+name+" "+budget+" "+year);
  let newDept=new Department(id,name, parseFloat(budget),parseInt(year),"",new Date());
  this.deptArray.push(newDept);
 }
 test(){
  console.log("Event generated");
 }
 station=""
 stationArray=['Thane','Airoli']
 addStation():void{
  this.stationArray.push(this.station);
 }
 bstyle="double";
 bcolor="green";
 obj:any;
 applyStyle(){
  this.obj=this.myStyle;
 }
 styleArray=['fontStyle',"colorStyle"];

 acceptData(data:string){
  this.fromChild=data;
 }
 acceptData2(data2:number){
this.eyear=data2;
 }

orderObject={
  sortProperty:'deptId',
  sortOrder:false,
  sortCase:true
}
sortBy(property:string){
  this.orderObject.sortProperty=property;
}
}

