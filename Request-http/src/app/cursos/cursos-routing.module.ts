import { FormCursoComponent } from './form-curso/form-curso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

const routes: Routes = [
  {path: '', component: CursosListaComponent},
  {path: 'novo', component: FormCursoComponent},
  {path: 'editar/:id', component: FormCursoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
