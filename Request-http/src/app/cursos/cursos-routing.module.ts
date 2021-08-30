import { CursoResolverGuard } from './guards/curso-resolver.guard';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

const routes: Routes = [
  {path: '', component: CursosListaComponent},
  {path: 'novo',
    component: FormCursoComponent,
    resolve: {
      curso: CursoResolverGuard
    }
  },
  {path: 'editar/:id',
   component: FormCursoComponent,
   resolve: {
    curso: CursoResolverGuard
   }},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
