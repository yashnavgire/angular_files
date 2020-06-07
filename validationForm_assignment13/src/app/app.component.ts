import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(public bobj:FormBuilder)
  {

  }

  supportForm=this.bobj.group(
    {
      firstname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
      lastname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9]+@[a-z0-9]{1,}\.[a-z]{2,}$')]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      city:['',[Validators.required,Validators.minLength(4)]],
      state: [''],
      zip:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(5),Validators.maxLength(5)]],
      comment:['',Validators.minLength(30)]
    }
  );
  
  required_errors={
    "firstname" : "first name required",
    "lastname" : "last name required",
    "email" : "Email required",
    "phone" : "Phone number required",
    "city" : "City required",
    "zip" : "Zip code required"
  }

  pattern_errors={
    "firstname" : "input should contain only alphabet",
    "lastname" : "input should contain only alphabet",
    "email" : "Insert correct email",
    "phone" : "Insert only numbers with 10 digit"
  }

  length_errors={
    "city" : "Minimum length should be 4",
    "zip" : "Enter 5 digit zip code",
    "comment" : "Elaborate more",
    "phone" : "Insert only numbers with 10 digit"
  }
  

  public errorMessage(element:string)
  {
    for(let err in this.supportForm.get(element).errors)
    {
      if(err=="required")
        return this.required_errors[element];
      
      else if(err=="pattern")
        return this.pattern_errors[element];

      else if(err=="minlength" || err=="maxlength")
        return this.length_errors[element];

      else
        return err;
    }
  }

}



