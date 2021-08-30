import { environment } from '../../../environments/environment';
import { Curso } from '../interface/curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient){ }

  public obter() {
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }

  public create(dados: Curso){
    return this.http.post(this.API, dados)
    .pipe(
      take(1)
    )
  }

  public getById(id: Curso) {
    return this.http.get<Curso>(`${this.API}/${id}`)
    .pipe(
      take(1)
      )
  }


  public putCurso(nomeCurso: any){
    return this.http.put(`${this.API}/${nomeCurso.id}`, nomeCurso)
    .pipe(
      take(1)
      )
  }


  save(curso: any){
    if(curso.id){
      return this.putCurso(curso)
    } else {
      return this.create(curso)
    }
  }

  remove(id: any) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}


