import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productInfo = 'N/A';
  constructor(private http: HttpClient, private oauthService: OAuthService) { }

  ngOnInit() {
    this.http.get("http://localhost:9999/products/search?sku=P00001")//, {headers: {'Authorization':'Bearer fbbeacd6-f3d9-492f-a03e-9b538b661adc'}})
      .subscribe((data) => this.productInfo = JSON.stringify(data) );
  }

}
