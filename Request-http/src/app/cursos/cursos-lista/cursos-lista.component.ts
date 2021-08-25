import { CursosService } from './services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../interface/curso';
import { empty, Observable, of, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos$!: Observable<Curso[]>;

  constructor(
    private serviceCurso: CursosService
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.serviceCurso.obter()
  }

}

