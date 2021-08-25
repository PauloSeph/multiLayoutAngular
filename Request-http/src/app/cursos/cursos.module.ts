import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursosListaComponent,
    FormCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
})
export class CursosModule { }
