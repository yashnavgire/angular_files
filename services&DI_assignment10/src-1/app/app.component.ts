import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from './arithmetic.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public add:number=0;
  public sub:number=0;

  constructor(private _arithmetic:ArithmeticService)
  {
    
  }

  ngOnInit()
  {
      this.add=this._arithmetic.Add(30,40);
      this.sub=this._arithmetic.Sub(30,40);
  }
}


