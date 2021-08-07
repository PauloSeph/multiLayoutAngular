import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-poc-take',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-info">
    </app-poc-base>
  `
})
export class PocTakeComponent implements OnInit, OnDestroy {

  nome: string = 'Component Com OP. TakeUntil';
  valor!: string;

   constructor(
    private service: EnviarValorService
    ) { }


  ngOnInit(){
    this.service.emissor$
    .pipe(
      tap(valor => console.log(this.nome, valor)),
      take(1)
    )
    .subscribe(
      novoValor => this.valor = novoValor
    )
  }


  ngOnDestroy() {
    console.log(`${this.nome} Foi destruído`)
  }
}
