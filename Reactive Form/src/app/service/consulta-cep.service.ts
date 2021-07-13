import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {

  constructor(private http: HttpClient) {}

  consultaCep(cep: any): Observable<Object> {
    // Verifica se o cep tem somente digitos, caso não ele faz um replace para string vazia
    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      //Expressão valida a quantidade de digitos
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`)
      }
    }

    return of({});
  }
}
