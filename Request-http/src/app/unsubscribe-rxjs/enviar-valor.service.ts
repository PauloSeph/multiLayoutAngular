import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarValorService {

  constructor() { }

  private _emissor$ = new Subject<string>();

  emitirValor(valor: string) {
    this._emissor$.next(valor);
  }

  get emissor$(){
    return this._emissor$.asObservable();
  }
}
