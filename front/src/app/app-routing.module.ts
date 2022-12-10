import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from '@components/animal/animal-list/animal-list.component';
import { NotFoundComponent } from '@components/general/not-found/not-found.component';
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
    path: 'confirm',
    loadComponent: () =>
      import('./components/animal/animal-adopt/animal-adopt.component').then(
        (m) => m.AnimalAdoptComponent
      ),
  },
  {
    path: 'shelter',
    loadComponent: () =>
      import(
        './components/shelter/shelter-dashboard/shelter-dashboard.component'
      ).then((m) => m.ShelterDashboardComponent),
  },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        loadComponent: () =>
          import('./components/admin/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },

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

  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
