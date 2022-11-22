import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from '@components/animal/animal-list/animal-list.component';
import { AuthGuard } from './shared/interceptors/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./components/auth/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./components/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },

  {
    path: 'animal-list',
    component: AnimalListComponent,
  },

  {
    path: 'animal-details/:index',
    loadComponent: () =>
      import('./components/animal/animal-view/animal-view.component').then(
        (m) => m.AnimalViewComponent
      ),
  },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'me',
        loadChildren: () =>
          import('./components/user/about-me/about-me.module').then(
            (m) => m.AboutMeModule
          ),
      },

      {
        path: 'animal-form',
        loadChildren: () =>
          import('./components/animal/animal-form/animal-form.module').then(
            (m) => m.AnimalFormModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
