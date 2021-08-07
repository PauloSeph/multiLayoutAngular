import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poc-async',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor$ | async" estilo="bg-success">
    </app-poc-base>
  `
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome = 'Componente com async';
  valor$!: Observable<string>;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.valor$ = this.service.emissor$
    .pipe(tap(valor => console.log(this.nome, valor)))
  }


  ngOnDestroy() {
    console.log(`${this.nome} Foi destruído`)
  }
}
