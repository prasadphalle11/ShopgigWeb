import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from 'src/app/Models/User';
import { LogInService } from 'src/app/Services/Log-In.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-LogIN',
  templateUrl: './LogIN.component.html',
  styleUrls: ['./LogIN.component.css']
})
export class LogINComponent implements OnInit {
  LogInForm: any;
  submitted = false;
  blankURL : false;
  constructor(private router: Router, private FormBuilder: FormBuilder,
    private loginservice :LogInService,private authService: AuthService
  ) { }
  newUserModal: User = new User();
  ngOnInit() {
    this.LogInForm = this.FormBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
        } ,

    );

  }
  get f() {
    // debugger;
    return this.LogInForm.controls;
  }

OnRegister()
{

  this.router.navigate(['Registration_Page']);
}
OnForgot()
{

  this.router.navigate(['Forgot_Password']);
}
OnSign(): void {
  this.submitted = true;
debugger;
  if (this.LogInForm.invalid) {
    return;
  }
  this.newUserModal.Email =this.LogInForm.controls.email.value;
  this.newUserModal.Password = this.LogInForm.controls.password.value
  this.authService.login(this.newUserModal)
  this.router.navigate(['dashboard']);
}
}
