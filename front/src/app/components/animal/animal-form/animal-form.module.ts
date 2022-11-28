import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalFormRoutingModule } from './animal-form-routing.module';
import { AnimalFormComponent } from './animal-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
@NgModule({
  declarations: [AnimalFormComponent],
  imports: [
    CommonModule,
    AnimalFormRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatAutocompleteModule,
    NgSelectModule,
  ],
})
export class AnimalFormModule {}
