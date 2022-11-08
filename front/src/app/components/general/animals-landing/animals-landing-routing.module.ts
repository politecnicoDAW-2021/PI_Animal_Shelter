import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsLandingComponent } from './animals-landing.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsLandingRoutingModule {}
