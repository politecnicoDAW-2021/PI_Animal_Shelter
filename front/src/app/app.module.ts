import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalIndividualComponent } from './components/animal-individual/animal-individual.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterModule } from './components/register/register.module';
import { AboutMeModule } from './components/about-me/about-me.module';
import { LoginModule } from './components/login/login.module';
import { LandingPageModule } from './components/landing-page/landing-page.module';
import { AuthInterceptor } from './shared/interceptors/authconfig.interceptor';
import { AuthService } from './services/auth.service';
import 'hammerjs';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [AppComponent, AnimalIndividualComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    NoopAnimationsModule,
    RegisterModule,
    AboutMeModule,
    LoginModule,
    LandingPageModule,
    SocialLoginModule,
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
