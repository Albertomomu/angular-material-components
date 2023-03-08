import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

import { FormComponent } from './form.component';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    MaterialModule
  ]
})
export class FormModule { }
