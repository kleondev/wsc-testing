import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesModule } from './pages/estudiantes/estudiantes.module';
import { PersonajesModule } from './pages/personajes/personajes.module';
import { ProfesoresModule } from './pages/profesores/profesores.module';

const routes: Routes = [
  {
    path: 'personajes',
    loadChildren: () => import('./pages/personajes/personajes.module').then(m => PersonajesModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./pages/estudiantes/estudiantes.module').then(m => EstudiantesModule)
  },
  {
    path: 'profesores',
    loadChildren: () => import('./pages/profesores/profesores.module').then(m => ProfesoresModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
