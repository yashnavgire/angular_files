import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  no:number=0;
  str:string="Stay Home,Stay Safe";
  constructor(private _strservice:StringService) { }

  ngOnInit(): void {
      this.no=this._strservice.CountCapital(this.str);
  }

}
