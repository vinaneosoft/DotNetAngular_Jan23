import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform{
  transform(value: string, ...args: string[]):string {
    console.log("PIPE Method called");
  
    return args[0]+"-"+value;
    
  }
}
