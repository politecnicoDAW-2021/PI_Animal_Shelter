import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalIndividualComponent } from './animal-individual.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalIndividualComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalIndividualRoutingModule { }
