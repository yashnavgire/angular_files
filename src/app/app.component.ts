import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public str:string='';

}


/*
26/4/2020
1.data of one component cannot be accessed by other componet in angular
2.In component implement manipulation of data of required for frontend of that component.
3.to use common data (common data place:service->is a class which is used to provide functionality) 
4.to use service.....component should inject it(service cannot be called)

//////////////////////////////////////////////////////////
5.Dependacy Injection (design pattern):Dependent objects  created outside,and send as parameter to
 constructor rather than creating those objects in constructor itself

 6.
*/
