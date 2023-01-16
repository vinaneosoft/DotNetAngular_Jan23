import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustom'
})
export class MycustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
