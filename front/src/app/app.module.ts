import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './components/register/register.module';
import { AboutMeModule } from './components/about-me/about-me.module';
import { LoginModule } from './components/login/login.module';

@NgModule({
  declarations:
  [
    AppComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    RegisterModule,
    AboutMeModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }