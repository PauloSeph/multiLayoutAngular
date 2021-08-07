import { CursosService } from './services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { Observable } from 'rxjs';

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
    this.cursos$ = this.serviceCurso.lista()
  }

}
