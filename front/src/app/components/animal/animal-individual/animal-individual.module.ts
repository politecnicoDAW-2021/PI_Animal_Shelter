import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalIndividualRoutingModule } from './animal-individual-routing.module';
import { AnimalIndividualComponent } from './animal-individual.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    AnimalIndividualComponent
  ],
  imports: [
    CommonModule,
    AnimalIndividualRoutingModule,
    MaterialModule
  ]
})
export class AnimalIndividualModule { }
