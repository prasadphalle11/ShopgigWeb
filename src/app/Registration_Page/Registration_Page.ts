import { Component, OnInit } from '@angular/core';
// import { LogINComponent } from '../LOG-IN/LogIN/LogIN.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { confirmedValidator } from '../ConfirmPasswordvalidator';

@Component({
  selector: 'app-Registration_Page',
  templateUrl: './Registration_Page.html',
  styleUrls: ['./Registration_Page.css']
})
export class Registration_Page implements OnInit {
  registerForm: any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,private router :Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      //firstname: ({value: ''}),
      firstName: ['', [Validators.required,Validators.minLength(25)]],
      lastName: ['', [Validators.required,Validators.minLength(25)]],
      userName: ['', [Validators.required,Validators.minLength(25)]],
      phoneNo: ['', [Validators.required,Validators.minLength(10)]],
      emailId: ['', [Validators.required,Validators.email,Validators.min(25)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required],]
    }, { 
      validator: confirmedValidator('password', 'confirmPassword')
       } 
    );
  }
  get f(){
    debugger;
    return this.registerForm.controls;
  }
  OnReset()
  {
    // this.submitted = false;
    //   this.registerForm.reset();
    this.router.navigate(['login']);
      
  }
  OnSubmit() {
    
 this.submitted = true;
}
}