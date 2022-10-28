import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/interceptors/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
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
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/landing-page/landing-page.module').then(
            (m) => m.LandingPageModule
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
