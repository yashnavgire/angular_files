export function CheckPassword(input:string):boolean
   {
     let capitalCnt=0;
     let smallCnt=0;
     let digitCnt=0;
     let specialCnt=0;

     for(let i=0;i<input.length;i++){
      let c=input.charAt(i);

      if(c>='A' && c<='Z')
        capitalCnt++;
      
      else if(c>='a' && c<='z')
        smallCnt++;

      else if(c>='0' && c<='9')
        digitCnt++;

      else
        specialCnt++;

      if(capitalCnt>=2 && smallCnt>=3 && digitCnt>=2 && specialCnt>=1)
        return true;
    }

     return false;
   }