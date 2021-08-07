import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-secondary">
    </app-poc-base>
  `
})
export class PocUnsubComponent implements OnInit, OnDestroy {


  nome = 'Component Com Unsubscribe'
  valor!: string;

  sub?: Subscription[] = [];

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.sub?.push(
      this.service.emissor$
      .pipe(tap(valor => console.log(this.nome, valor)))
      .subscribe((novoValor) => {
        this.valor = novoValor
      }))


  }

  ngOnDestroy() {
    console.log(`${this.nome} Foi destruído`)
    this.sub?.forEach( valor => {
      valor.unsubscribe()
    })
  }


}
