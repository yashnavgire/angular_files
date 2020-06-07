import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  
  public ChkPrime(x:number):boolean
  {
    var i=0;
    for(i=x/2;i>=0;i--)
    {
      if(x%i==0)
        break;
    }
    if(i>=0)
      return true;

    else
      return false;
  }
}
