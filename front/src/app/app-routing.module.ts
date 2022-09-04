import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => 
      m.RegisterModule)
  },

  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./components/landing-page/landing-page.module').then(m =>
      m.LandingPageModule)
  },
  
  {
    path: 'me',
    loadChildren: () => import('./components/about-me/about-me.module').then(m => 
      m.AboutMeModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => 
      m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
