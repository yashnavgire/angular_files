import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import{ ChangeDetectorRef } from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
   public CountCapital(input:string):number
   {
      let cnt=0;

      for(let i=0;i<input.length;i++){
        if(input.charAt(i)>='A' && input.charAt(i)<='Z')
          cnt++;
      }

      return cnt;
   }

   public CheckPassword(input:string):boolean
   {
     let ans=false;

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

   public ArrayAddition(arr):number
   {
     let add=0;
     for(let i=0;i<arr.length;i++){
       add+=arr[i];
     }

     return add;
   }

}

