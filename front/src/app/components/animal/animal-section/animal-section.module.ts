import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalSectionComponent } from './animal-section.component';
import { AnimalSectionRoutingModule } from './animal-section-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [AnimalSectionComponent],
  imports: [
    CommonModule,
    AnimalSectionRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatAutocompleteModule,
  ],
})
export class AnimalSectionModule {}
