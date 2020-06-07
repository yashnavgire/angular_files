import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'tech',component:TechnologiesComponent},
  {path:'books',component:BooksComponent},
  {path:'',component:TechnologiesComponent},
  {path:'**',component:TechnologiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
