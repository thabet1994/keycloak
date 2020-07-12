import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'keyloakApp';
  token: string;
  name:string;

  ngOnInit() {
    this.token = localStorage.getItem('token');
    let data = this.getDecodedAccessToken(this.token)
    this.name = data.name;
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
}
