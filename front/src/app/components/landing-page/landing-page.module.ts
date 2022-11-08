import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NguCarouselModule } from '@ngu/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AnimalsLandingComponent } from '../general/animals-landing/animals-landing.component';

@NgModule({
  declarations: [LandingPageComponent, AnimalsLandingComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MaterialModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatCheckboxModule,
    [NguCarouselModule],
    SlickCarouselModule,
  ],
})
export class LandingPageModule {}
