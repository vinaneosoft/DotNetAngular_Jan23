import { Component } from '@angular/core';
import { MathsService } from '../myservices/maths.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
counter1=this.mathService.getCounter();

addResult=0;
  constructor(private mathService:MathsService){

  }

  addNums(addForm:any)
  {
    let n1=addForm.value.num1;
    let n2=addForm.value.num2;
   this.addResult= this.mathService.mathAdd(n1,n2); // 
  }

  getCount(){
    this.mathService.incrementCounter();
    this.counter1=this.mathService.getCounter();
  }
}
