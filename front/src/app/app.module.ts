import {
  SocialLoginModule,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/auth/login/login.module';
import { RegisterModule } from './components/auth/register/register.module';
import { LandingPageModule } from './components/landing-page/landing-page.module';
import { AboutMeModule } from './components/user/about-me/about-me.module';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './shared/interceptors/authconfig.interceptor';
import { AnimalFormModule } from './components/animal/animal-form/animal-form.module';
import { NavbarComponent } from './components/general/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RegisterModule,
    AboutMeModule,
    LoginModule,
    LandingPageModule,
    SocialLoginModule,
    AnimalFormModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    {
      provide: 'SocialAuthServiceConfig',

      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '107038177183-tfbn4vpe57du6invbfh2lbrubcpotpvt.apps.googleusercontent.com',
              {
                scope: 'email',
                plugin_name: 'animal-shelter',
              }
            ),
          },
        ],
        onError: (err: any) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    SocialAuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
