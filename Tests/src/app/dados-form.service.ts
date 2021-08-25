import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formModel } from './testForm/formModel';

@Injectable({
  providedIn: 'root'
})
export class DadosFormService {

  private api = 'http://localhost:3001/cursos'

  constructor(private http: HttpClient) {
  }

  public obter() {
    return this.http.get<formModel>(this.api)
  }

  public create(curso: any){
    return this.http.post(this.api, curso)
  }


}

