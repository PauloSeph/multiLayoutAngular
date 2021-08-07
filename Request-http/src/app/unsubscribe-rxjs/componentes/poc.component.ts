import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-poc',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `
})
export class PocComponent implements OnInit, OnDestroy {

  nome = 'Component sem Unsubscribe'
  valor!: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.service.emissor$
    .pipe(tap(valor => console.log(this.nome, valor)))
    .subscribe((novoValor) => {
      this.valor = novoValor
    })
  }

  ngOnDestroy() {
    console.log(`${this.nome} Foi destruído`)
  }

}
