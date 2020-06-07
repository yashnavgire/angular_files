import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(x:string):number
  {
    var cnt=0;
    var i=0;
    for(i=0;i<x.length;i++)
    {
      if(x[i]>='A' && x[i]<='Z')
          cnt++;
    }
    return cnt;
  }
}
