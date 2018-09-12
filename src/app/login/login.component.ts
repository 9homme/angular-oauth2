import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = '';
  constructor(private http: HttpClient, private oauthService: OAuthService, private userService: UserService) {
  }
  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.userService.logout();
  }

  public get isAuthenticated() {
    return this.oauthService.hasValidAccessToken();
  }
  ngOnInit() {}
  ngDoCheck() {
    if(this.isAuthenticated)
    {
      this.userService.fetchUser().subscribe((userInfo)=>this.name=userInfo.userAuthentication.principal.username);
    } else {
      this.name = '';
    }
  }

}
