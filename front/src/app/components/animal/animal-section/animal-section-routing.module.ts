import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalSectionComponent } from './animal-section.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalSectionRoutingModule {}
