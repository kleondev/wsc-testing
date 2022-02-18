import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { GlobalModule } from 'src/app/module/global.module';
import { EstudianteComponent } from './estudiante/estudiante.component';


@NgModule({
  declarations: [
    EstudiantesComponent,
    EstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    GlobalModule
  ]
})
export class EstudiantesModule { }
