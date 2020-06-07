import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  str:string="";
  no:number=11;
  constructor(private _numberservice:NumberService) { }

  ngOnInit(): void {
    if(this._numberservice.ChkPrime(this.no))
    {
      this.str="is a";
    }
    else
    {
      this.str="is not a";
    }
  }

}
