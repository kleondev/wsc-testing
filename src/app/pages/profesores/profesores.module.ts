import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { GlobalModule } from 'src/app/module/global.module';


@NgModule({
  declarations: [
    ProfesoresComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    GlobalModule
  ]
})
export class ProfesoresModule { }
