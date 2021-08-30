import { CursosService } from '../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../interface/curso';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {


  cursos$?: Observable<Curso[]>;
  error$ = new Subject<boolean>();


  constructor(
    private serviceCurso: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.serviceCurso.obter()
    .pipe(
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        return of([])
      })
    )
  }

  onEdit(id: any) {
    this.router.navigate(
      ['cursos', 'editar', id],
      // {relativeTo: this.route})
    )}
}

