import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {
//   GoogleLoginProvider,
//   SocialAuthService,
//   SocialAuthServiceConfig,
// } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    // GoogleLoginProvider,
    // SocialAuthService,

    // {
    //   provide: 'SocialAuthServiceConfig',

    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '107038177183-tfbn4vpe57du6invbfh2lbrubcpotpvt.apps.googleusercontent.com',
    //           {
    //             scopes: 'email',
    //           }
    //         ),
    //       },
    //     ],
    //     onError: (err: any) => {
    //       console.error(err);
    //     },
    //   } as SocialAuthServiceConfig,
    // },
    // SocialAuthService,
  ],
})
export class LoginModule {}
