import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { KeyloakService } from './services/keyloak.service';

export function kcFactory(ksService:KeyloakService){
  return ()=>ksService.init();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide:APP_INITIALIZER,deps:[KeyloakService],useFactory:kcFactory,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
