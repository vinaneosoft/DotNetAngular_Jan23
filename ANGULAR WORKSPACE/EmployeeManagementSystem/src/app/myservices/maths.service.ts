import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  private mathCounter=0;
  
  mathAdd(...nums:number[]):number{
    // inbuilt method to make sum of array elements
    return nums.reduce((acc,num)=>acc+num);
  }

  incrementCounter():void{
    this.mathCounter++;
  }
  getCounter():number{
    return this.mathCounter;
  }
  constructor() { }
}
