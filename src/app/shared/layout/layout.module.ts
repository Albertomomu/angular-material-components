import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { MaterialModule } from '../modules/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

//SERVICES


// Components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  exports: [
    FooterComponent, HeaderComponent, NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
