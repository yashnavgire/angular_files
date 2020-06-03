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
  public gold: Observable<any[]>;
  public silver:Observable<any[]>;
  public key;
  public gitems;
  public types;

    constructor(db: AngularFirestore,private cdRef : ChangeDetectorRef ) {
        this.gold = db.collection('/gold').valueChanges();//whenever data in /batches database changes get that(real-time database)
        this.silver = db.collection('/silver').valueChanges();
        this.types=[this.gold,this.silver];
    }

    public getkey(x:any):void
    {
      this.key=Object.keys(x);
      this.gitems=x;
      return(this.gitems["name"]);
    }

}

