import { Component } from '@angular/core';
import { AuthenticationService } from './Authentication/authentication.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myportofio';
  constructor( public Auth:AuthenticationService)
  {

  }
  logout()
  {
    this.Auth.logout();
  }
}
