import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev'
})
export class MyrevPipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): string {
    let reversed:string="";

    for(let i=value.length-1;i>=0;i--)
    {
      reversed+=value[i];
    }

    return reversed;
  }

}
