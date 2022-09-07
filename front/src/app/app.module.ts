import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalIndividualComponent } from './components/animal-individual/animal-individual.component';


import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './components/register/register.module';
import { AboutMeModule } from './components/about-me/about-me.module';
import { LoginModule } from './components/login/login.module';
import { LandingPageModule } from './components/landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent,
    AnimalIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,    
    NoopAnimationsModule,
    HttpClientModule,
    RegisterModule,
    AboutMeModule,
    LoginModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
