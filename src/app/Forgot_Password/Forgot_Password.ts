import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Forgot_Password',
  templateUrl: './Forgot_Password.html',
  styleUrls: ['./Forgot_Password.css']
})
export class Forgot_Password implements OnInit {
  ForgotForm: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router) { }
  
  ngOnInit() {
    this.ForgotForm = this.formBuilder.group({
      //firstname: ({value: ''}),
      emailID: ['', [Validators.required,Validators.email]],
            } ,
     
    );
  }
  get f(){
    debugger;
    return this.ForgotForm.controls;
  }

  OnReset()
  {
    // this.submitted = false;
    //   this.registerForm.reset();
    this.router.navigate(['login']);
      
  }
  OnSave() {
    this.submitted = true;

    if (this.ForgotForm.invalid) {
      return;
}
  }
}