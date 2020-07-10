export function CountCapital(input:string):number
{
   let cnt=0;

   for(let i=0;i<input.length;i++){
     if(input.charAt(i)>='A' && input.charAt(i)<='Z')
       cnt++;
   }

   return cnt;
}