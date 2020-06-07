import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value:number, ...args: number[]): unknown {
    for(let arg of args)
    {
      value=value*arg;
    }
    return value;
  }

}
