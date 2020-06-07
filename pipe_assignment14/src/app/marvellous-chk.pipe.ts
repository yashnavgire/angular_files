import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, args: string): string {
    let result="";
    if(args=="even")
    {
      if(value%2==0)
       result+="It is even";

      else 
        result+="It is not even";
    }

    else if(args=="odd")
    {
      if(value%2!=0)
       result+="It is odd";
      else
        result+="It is not odd";
    }

    else if(args=="prime")
    {
      let i;
      for(i=2;i<value/2;i++)
      {
        if((value%i)==0)
        {
          result+="It is not prime";
          break;
        }
      }

      if(i>value/2)
       result+="It is prime";
    }

    else if(args=="perfect")
    {
      let i;
      let sum=1;
      for(i=2;i<value/2;i++)
      {
        if((value%i)==0)
        {
          sum+=i;
        }
      }

      if(sum==value)
        result+="It is Perfect";
      else
        result+="It is not Perfect";
    }


    return result;
  }

}
