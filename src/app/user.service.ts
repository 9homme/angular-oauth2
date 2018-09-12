import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private oauthService: OAuthService) { }

  fetchUser(): Observable<any> {
    let userInfo = sessionStorage.getItem('userInfo');
    if(!userInfo){
      let userOf =  this.http.get("http://localhost:8080/resource/user/");
      userOf.subscribe((data) => (
        sessionStorage.setItem('userInfo',JSON.stringify(data))
      ));
      return userOf;
    } else {
      return of(JSON.parse(userInfo));
    }
  }

  logout(): void {
    this.http.get("http://localhost:8080/resource/user/logout").subscribe(() => {
      this.oauthService.logOut();
      sessionStorage.removeItem('userInfo');
  });
  }
}
