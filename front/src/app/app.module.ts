import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalIndividualComponent } from './components/animal-individual/animal-individual.component';





@NgModule({
  declarations: [
    AppComponent,
    AnimalIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
