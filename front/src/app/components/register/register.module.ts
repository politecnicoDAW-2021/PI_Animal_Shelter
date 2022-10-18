import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { AuthService } from 'src/app/services/auth.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, SocialAuthService],
})
export class RegisterModule {}
