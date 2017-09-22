import { FormdataService } from './formdata.service';
import { FormService } from './form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Simple Form';
  desigArray:any[]=[];
  nameArray:any[]=[];
  signupForm:FormGroup;
  selectedprefix="Mr";


  constructor(private formService:FormService,private formDataservice:FormdataService){}

  ngOnInit(){

    this.desigArray= this.formService.title
    this.signupForm = new FormGroup({
      'fname': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
      'lname': new FormControl(null,Validators.required),
      'age': new FormControl(null,[Validators.required]),
      'pnumber': new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'prefix': new FormControl(null,Validators.required)
    })
  }


  

  
  

  
  onSubmit(){

    let user={
      fname:this.signupForm.value['fname'],
      lname:this.signupForm.value['lname'],
      age:this.signupForm.value['age'],
      phone:this.signupForm.value['pnumber'],
      designation:this.signupForm.value['prefix'],
    }
  
    this.formDataservice.addData(user);
    this.nameArray= this.formDataservice.getData();
    

  }
}
