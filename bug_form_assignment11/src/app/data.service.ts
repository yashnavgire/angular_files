import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public firstName="";
  public lastName="";
  public mytime=new Date();
  public myDate=new Date();
  public bug="";
  public email="";
  public impact="";

  constructor() { }
}
