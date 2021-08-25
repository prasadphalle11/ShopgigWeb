import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-Forgot_Password',
  templateUrl: './Forgot_Password.component.html',
  styleUrls: ['./Forgot_Password.component.css']
})
export class Forgot_PasswordComponent implements OnInit {
  ForgotForm: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  
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
  OnSave() {
    this.submitted = true;

    if (this.ForgotForm.invalid) {
      return;
}
  }
}