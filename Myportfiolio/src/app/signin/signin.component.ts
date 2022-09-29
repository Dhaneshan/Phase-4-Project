import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../Authentication/authentication.service';
import { data } from '../Model/data';

@Component({
  selector: 'cf-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( private Auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  Submit(signInForm:NgForm)
  {
    console.log(signInForm.value);
    const logindata=new data(signInForm.value.Email,signInForm.value.Password);
    this.Auth.authenticate(logindata);
  }

}
