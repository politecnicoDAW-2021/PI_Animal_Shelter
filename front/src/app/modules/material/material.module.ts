import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule,
  MatLabel 
} from '@angular/material/form-field'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatLabel
  ],
  exports: [
    MatFormFieldModule,
    MatLabel
  ]
})
export class MaterialModule { }
