import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { ButtonsRoutingModule } from './buttons-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

// COMPONENTS
import { ButtonsComponent } from './buttons.component';



@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    MaterialModule
  ]
})
export class ButtonsModule { }
