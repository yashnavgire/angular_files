import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    for(let arg of args)
    {
        value+=arg;
    }
    return value;
  }

}
