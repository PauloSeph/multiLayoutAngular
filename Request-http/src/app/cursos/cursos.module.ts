import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    RouterModule,
  ],
})
export class CursosModule { }
