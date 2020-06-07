import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Add(x:number,y:number):number
  {
    return x+y;
  }

  public Sub(x:number,y:number):number
  {
    return x-y;
  }
  
}
