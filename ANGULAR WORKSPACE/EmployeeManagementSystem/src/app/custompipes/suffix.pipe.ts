import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffix'
})
export class SuffixPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]) {
    return value+"-"+args[0];
  }
}
