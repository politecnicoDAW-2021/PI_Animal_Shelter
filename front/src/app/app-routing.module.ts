import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/interceptors/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },

  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => 
      m.RegisterModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => 
      m.LoginModule)
  },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/landing-page/landing-page.module').then(m =>
          m.LandingPageModule)
      },
        
      {
        path: 'me',
        loadChildren: () => import('./components/about-me/about-me.module').then(m => 
          m.AboutMeModule)
        } 
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
