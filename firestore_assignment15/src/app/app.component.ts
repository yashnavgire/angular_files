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


/*
**database types:
1.structured database(sql):
data in tabular format,therefore restrictions are there
to fetch and stored data which are there in tabular

2.nosql  - not only sql(sql+other) :
any data can be stored.




**Firebase-nosql database:
was popular in real time gaming.

nosql:
stored in key-value format and tree structure.

#Services provided(total - 19):
1.Real-time database:
-every change in database visible to everyone.

2.authentication of application:
-services provided login authentication(handling
  username and password)
  -facebook,gmail

3.cloud storage:

4.deploy web application(web hosting):
-cheapest

Compatible:
typescript
c++
golang
android

*/


/*
for firebase in angular
1.Install
npm install firebase angularfire2 --save

2.updates in:
environments.ts:


*/