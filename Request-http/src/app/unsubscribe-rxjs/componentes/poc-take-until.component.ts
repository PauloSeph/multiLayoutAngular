import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-primary">
    </app-poc-base>
  `
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {

  nome: string = 'Component Com OP. TakeUntil';
  valor!: string;

  unsub$ = new Subject();

  constructor(
    private service: EnviarValorService
    ) { }


  ngOnInit(){
    this.service.emissor$
    .pipe(
      tap(valor => console.log(this.nome, valor)),
      takeUntil(this.unsub$)
    )
    .subscribe(
      novoValor => this.valor = novoValor
    )
  }


  ngOnDestroy() {
    console.log(`${this.nome} Foi destruído`)
    this.unsub$.next();
    this.unsub$.complete();
  }
}
