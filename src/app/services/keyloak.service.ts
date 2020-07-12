import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js'
import { HttpClient } from '@angular/common/http';
import * as Keycloak from 'keycloak-js';
declare var keycloak:any;
@Injectable({
  providedIn: 'root'
})
export class KeyloakService {
  public kc:KeycloakInstance;

  constructor(private http:HttpClient) { }

  async init(){
    console.log("keycloak")
    this.kc =  Keycloak({
      realm: "myrealm",
      url: "http://localhost:8080/auth/",
      clientId:"angularApp"
     });

     await this.kc.init({
       onLoad:'login-required'
     });
     localStorage.setItem('token', this.kc.token);
     console.log(this.kc.token)

  }
}
