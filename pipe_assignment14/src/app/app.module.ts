import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyrevPipe } from './myrev.pipe';
import { MyaddPipe } from './myadd.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MyrevPipe,
    MyaddPipe,
    MyMultPipe,
    MarvellousChkPipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
