import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalSectionComponent } from './animal-section.component';
import { AnimalSectionRoutingModule } from './animal-section-routing.module';

@NgModule({
  declarations: [AnimalSectionComponent],
  imports: [CommonModule, AnimalSectionRoutingModule],
})
export class AnimalSectionModule {}
