import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const routes:Routes=[{path: 'display', component: DisplayComponent},
                      {path:'home',component:PersonalInfoComponent},
                      {path:'',component:PersonalInfoComponent},
                      {path:'**',component:PersonalInfoComponent}];


@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
