import { environment } from './../../../environments/environment';
import { CrudServiceService } from './../../shared/crud-service.service';
import { Injectable } from '@angular/core';
import { Curso } from '../interface/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosTwoService extends CrudServiceService<Curso>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }

}
