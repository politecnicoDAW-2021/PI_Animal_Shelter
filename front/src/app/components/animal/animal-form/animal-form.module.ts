import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalFormRoutingModule } from './animal-form-routing.module';
import { AnimalFormComponent } from './animal-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [AnimalFormComponent],
  imports: [
    CommonModule,
    AnimalFormRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatAutocompleteModule,
  ],
  providers: [
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
export class AnimalFormModule {}
