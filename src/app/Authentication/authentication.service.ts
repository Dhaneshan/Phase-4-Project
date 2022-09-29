import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../Model/data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private readonly Admin= new data("sdhaneshan1@gmail.com","Dhaneshan@2022");
islogin=false;
  constructor(private router:Router) { }

  authenticate(logindata:data):boolean
  {
    if(this.checkadmin(logindata))
    {
      this.islogin=true;
      this.router.navigate(['home']);
      return true;
    }
    this.islogin=false;
    return false;

  }
  private checkadmin(logindata:data):boolean
  {
         return (logindata.getEmail() === this.Admin.getEmail() && logindata.getPassword()===this.Admin.getPassword());
  }
   logout()
   {
    this.islogin=false;
    this.router.navigate(['']);
   }
}
