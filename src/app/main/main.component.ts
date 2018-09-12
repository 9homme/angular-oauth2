import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userInfo = 'Not Login';
  constructor(private http: HttpClient, private oauthService: OAuthService) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/resource/user").subscribe((data) => this.userInfo = JSON.stringify(data) );
  }

}
